import { printSourceFile } from '../../src/printer';
import { parseScript, parseModule, transformScript, transformModule } from '../../src/kataw';
import { promiseToReadFile, promiseToWriteFile, Constants, report, deepEqual } from './utils';
import * as transformers from '../../src/transform/transformers/index'

function transform(code: string, transformOptions: any) {
  return (transformOptions.module ? transformModule : transformScript)(code, transformOptions.transformers, transformOptions);
}

function parse(code: string, parserOptions: any) {
  return (parserOptions.module ? parseModule : parseScript)(code, parserOptions);
}

function strings2transformers(strs: string[]) {
  return strs.map(str => {
    const transformer = (transformers as any)['transform' + str];
    if (typeof transformer === 'function') {
      return transformer;
    }
    throw new Error(`invalid transformer: ${str}`);
  })
}

// testing object
export interface Tob {
  filename: string;
  content: string;
  input: string;
  parserOptions: any;
  cst?: any;
  $cst?: any;
  printerOptions: any;
  printed?: any;
  $printed?: any;
  diagnostics?: any;
  $diagnostics?: any;
  transformOptions?: any;
  transform?: any;
  $transform?: any;
  isMatched?: boolean;
}

export function updateTob(tob: Tob, updateItems: string[]): void {
  const outputIndex = tob.content.indexOf(Constants.Output);
  const output = outputBlock(tob, updateItems);
  const header = outputIndex > -1 ? tob.content.slice(0, outputIndex) : tob.content;
  tob.content = header + output;
  return promiseToWriteFile(tob.filename, tob.content);
}

export async function file2Tob(filename: string): Promise<Tob> {
  const content: any = await promiseToReadFile(filename);

  const tob: Tob = {
    filename,
    content,
    input: readFromMd(content, Constants.Input, false),
    parserOptions: readFromMd(content, Constants.ParserOptions, true),
    cst: readFromMd(content, Constants.Header, true),
    printerOptions: readFromMd(content, Constants.PrinterOptions, true),
    printed: readFromMd(content, Constants.Printed, false),
    diagnostics: readFromMd(content, Constants.Diagnostics, false),
    transformOptions: getTransformerOptions(content),
    transform: readFromMd(content, Constants.Transform, false)
  };

  tob.$cst = parse(tob.input, tob.parserOptions);
  tob.$printed = printSourceFile(tob.$cst, tob.printerOptions);
  // TODO: waiting the printer done!
  tob.$diagnostics =
    tob.$printed === '✖ Soon to be open sourced'
      ? ''
      : diagnostics2md(printSourceFile(tob.$printed, tob.parserOptions));

  tob.$transform = transform(tob.input, tob.transformOptions);
  tob.isMatched = isMatchedTob(tob);
  return tob;
}

export function isMatchedTob(tob: Tob): boolean {
  return (
    deepEqual(tob.cst, tob.$cst) && deepEqual(tob.printed, tob.$printed) && deepEqual(tob.diagnostics, tob.$diagnostics) && deepEqual(tob.transform, tob.$transform)
  );
}

function getTransformerOptions(str: string) {
  const transformerOptions = readFromMd(str, Constants.TransformOptions, true);
  if (transformerOptions?.transformers) {
    transformerOptions.transformers = transformerOptions.transformers.map(strings2transformers);
  }
  return transformerOptions;
}

function readFromMd(str: string, flag: string, ev = false) {
  const offset = str.indexOf(flag);
  const start1 = str.indexOf(Constants.JsStart, offset);
  const startFlag = start1 !== -1 ? Constants.JsStart : Constants.JavascriptStart;
  const endFlag = start1 !== -1 ? Constants.JsEnd : Constants.JavascriptEnd;

  const start = str.indexOf(startFlag, offset);
  const end = str.indexOf(endFlag, offset);
  if (start === -1 || end === -1) {
    throw new Error(`invalid md file: cannot found flag '${flag}'.`)
  }
  const t = str.slice(start + startFlag.length, end);
  return ev ? offset === -1 ? {} : eval('0||' + t + '') : t;
}
// prettier-ignore
function outputBlock(tob: Tob, updateItems: any) {
  return `
## Output

### Hybrid CST
${Constants.JavascriptStart}${
  tob.parserOptions && updateItems.includes('cst')  ? JSON.stringify(tob.$cst, null, 4) : JSON.stringify(tob.cst, null, 4)
} ${
    Constants.JavascriptEnd
  }
### Printed
${Constants.JavascriptStart}${
  tob.printerOptions && updateItems.includes('printed') ? tob.$printed : tob.printed
} ${ Constants.JavascriptEnd }
### Diagnostics
${Constants.JavascriptStart}${
  tob.printerOptions && updateItems.includes('diagnostics') ? tob.$diagnostics : tob.diagnostics
} ${
    Constants.JavascriptEnd
  }
### Transform
${Constants.JavascriptStart}${
  tob.transformOptions && updateItems.includes('transform') ? JSON.stringify(tob.$transform, null, 4) : JSON.stringify(tob.transform, null, 4)
} ${
    Constants.JavascriptEnd
  }
`;
}

function diagnostics2md(diagnostics: any) {
  let diagnosticString = '';
  if (diagnostics.length) {
    diagnostics.forEach(function (a: any) {
      diagnosticString += '✖ ' + a.message + ' - start: ' + a.start + ', end: ' + a.length;
      diagnosticString += '\n';
    });
  } else {
    diagnosticString += '✔ No errors';
  }

  return diagnosticString;
}
