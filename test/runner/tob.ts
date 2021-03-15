import { printSourceFile } from '../../src/compiler/printer';
import { parseScript, parseModule } from '../../src/kataw';
import { promiseToReadFile, promiseToWriteFile, Constants, deepEqual } from './utils';

// testing object
export interface Tob {
  filename: string;
  content?: string;
  input: string;
  parserOptions: any;
  printerOptions: any;
  cst?: any;
  $cst?: any;
  printed?: any;
  $printed?: any;
  diagnostics?: any;
  $diagnostics?: any;
  isMatched?: boolean;
}

export function updateTob(tob: any, updateItems: any): void {
  const outputIndex = tob.content.indexOf(Constants.Output);
  const output = outputBlock(tob, updateItems);
  tob.content = tob.content.slice(0, outputIndex) + output;
  return promiseToWriteFile(tob.filename, tob.content);
}

export async function file2Tob(filename: string): Promise<Tob> {
  const content: any = await promiseToReadFile(filename);

  const tob: Tob = {
    filename,
    content,
    input: md2input(content),
    parserOptions: md2parserOptions(content),
    printerOptions: md2printerOptions(content),
    cst: md2cst(content),
    printed: md2printed(content),
    diagnostics: md2diagnostics(content)
  };

  tob.$cst = (tob.parserOptions.module ? parseModule : parseScript)(tob.input, tob.parserOptions);
  tob.$printed = printSourceFile(tob.$cst, tob.printerOptions);
  // TODO: waiting the printer done!
  tob.$diagnostics =
    tob.$printed === '✖ Soon to be open sourced'
      ? ''
      : diagnostics2md(printSourceFile(tob.$printed, tob.parserOptions));
  tob.isMatched = isMatchedTob(tob);
  return tob;
}

export function isMatchedTob(tob: Tob) {
  return (
    deepEqual(tob.cst, tob.$cst) && deepEqual(tob.printed, tob.$printed) && deepEqual(tob.diagnostics, tob.$diagnostics)
  );
}

function md2parserOptions(str: string) {
  const offset = str.indexOf(Constants.Options);
  const start1 = str.indexOf(Constants.JsStart, offset);
  const end1 = str.indexOf(Constants.JsEnd, offset);
  const t = str.slice(start1 + Constants.JsStart.length, end1);
  return offset === -1 ? {} : eval('0||' + t + '');
}

function md2input(str: string) {
  const offset = str.indexOf(Constants.Input);
  const start = str.indexOf(Constants.JsStart, offset);
  const end = str.indexOf(Constants.JsEnd, offset);
  const t = str.slice(start + Constants.JsStart.length, end);
  return t;
}

// TODO: read printerOptions from file content
function md2printerOptions(str: string) {
  return {
    tabWidth: 2,
    printWidth: 80,
    useTabs: false,
    bracketSpacing: true
  };
}

function md2cst(str: string) {
  const offset = str.indexOf(Constants.Header);
  const start = str.indexOf(Constants.JavascriptStart, offset);
  const end = str.indexOf(Constants.JavascriptEnd, offset);
  const t = str.slice(start + Constants.JavascriptStart.length, end);
  return offset === -1 ? {} : JSON.parse(t);
}

function md2printed(str: string) {
  const cstOffset = str.indexOf(Constants.Printed);
  const start = str.indexOf(Constants.JavascriptStart, cstOffset);
  const end = str.indexOf(Constants.JavascriptEnd, cstOffset);
  return str.slice(start + Constants.JavascriptStart.length, end);
}

function md2diagnostics(str: string) {
  const diagnosticsOffset = str.indexOf(Constants.Diagnostics);
  const start = str.indexOf(Constants.JavascriptStart, diagnosticsOffset);
  const end = str.indexOf(Constants.JavascriptEnd, diagnosticsOffset);
  return str.slice(start + Constants.JavascriptStart.length, end);
}

function outputBlock(tob: Tob, updateItems: any) {
  return `
## Output

### Hybrid CST
${Constants.JavascriptStart}${JSON.stringify(updateItems.includes('parser') ? tob.$cst : tob.cst, null, 4)}${
    Constants.JavascriptEnd
  }
### Printed
${Constants.JavascriptStart}${updateItems.includes('printer') ? tob.$printed : tob.printed}${Constants.JavascriptEnd}
### Diagnostics
${Constants.JavascriptStart}${updateItems.includes('printer') ? tob.$diagnostics : tob.diagnostics}${
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
