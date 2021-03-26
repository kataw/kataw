/**
 * @fileoverview main utilities for testing kataw.
 * @author 唯然<weiran.zsd@outlook.com>
 */
import { printSourceFile } from '../../src/printer';
import { parseScript, parseModule, transformScript, transformModule } from '../../src/kataw';
import { promiseToReadFile, promiseToWriteFile, Constants, report, deepEqual } from './utils';
import * as transformers from '../../src/transform/transformers/index';

function transform(code: string, transformOptions: any) {
  return (transformOptions.module ? transformModule : transformScript)(
    code,
    transformOptions.transformers,
    transformOptions
  );
}

function parse(code: string, parserOptions: any) {
  return (parserOptions.module ? parseModule : parseScript)(code, parserOptions);
}

function strings2transformers(strs: string[]) {
  return strs.map((str) => {
    const transformer = (transformers as any)['transform' + str];
    if (typeof transformer === 'function') {
      return transformer;
    }
    throw new Error(`invalid transformer: ${str}`);
  });
}

// testing object
export interface Tob {
  filename: string;
  content: string;
  input?: string;
  parserOptions?: any;
  cst?: any;
  $cst?: any;
  printerOptions?: any;
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
  };

  tob.input = readFromMd(tob, Constants.Input, false);
  tob.parserOptions = readFromMd(tob, Constants.ParserOptions, true);
  tob.cst = readFromMd(tob, Constants.Header, true);
  tob.printerOptions = readFromMd(tob, Constants.PrinterOptions, true),
  tob.printed = readFromMd(tob, Constants.Printed, false);
  tob.diagnostics = readFromMd(tob, Constants.Diagnostics, false);
  tob.transformOptions = getTransformerOptions(tob);
  tob.transform = readFromMd(tob, Constants.Transform, true);

  tob.$cst = tob.parserOptions && parse(tob.input!, tob.parserOptions || tob.transformOptions);
  tob.$printed = tob.printerOptions && printSourceFile(tob.$cst!, tob.printerOptions);
  // TODO: waiting the printer done!
  tob.$diagnostics =
    tob.$printed === '✖ Soon to be open sourced'
      ? ''
      : tob.printerOptions && diagnostics2md(printSourceFile(tob.$printed, tob.parserOptions));

  tob.$transform = tob.transformOptions && transform(tob.input!, tob.transformOptions);
  tob.isMatched = isMatchedTob(tob);
  return tob;
}
export function isMatchedTob(tob: Tob): boolean {
  return (
    (tob.parserOptions === null || deepEqual(tob.cst, tob.$cst)) &&
    (tob.printerOptions === null || deepEqual(tob.printed, tob.$printed)) &&
    (tob.printerOptions === null || deepEqual(tob.diagnostics, tob.$diagnostics)) &&
    (tob.transformOptions === null || deepEqual(tob.transform, tob.$transform))
  );
}

function getTransformerOptions(tob: Tob) {
  const transformerOptions = readFromMd(tob, Constants.TransformOptions, true);
  if (transformerOptions?.transformers) {
    transformerOptions.transformers = strings2transformers(transformerOptions.transformers);
  }
  return transformerOptions;
}

function readFromMd(tob: Tob, flag: string, ev = false) {
  const offset = tob.content.indexOf(flag);
  const start1 = tob.content.indexOf(Constants.JsStart, offset);
  const startFlag = start1 !== -1 ? Constants.JsStart : Constants.JavascriptStart;
  const endFlag = start1 !== -1 ? Constants.JsEnd : Constants.JavascriptEnd;

  const start = tob.content.indexOf(startFlag, offset);
  const end = tob.content.indexOf(endFlag, offset);
  if (start === -1 || end === -1) {
    throw new Error(`invalid md file(${tob.filename}): cannot found flag '${flag}'.`);
  }
  const t = tob.content.slice(start + startFlag.length, end);
  return ev ? (offset === -1 ? null : eval('0||' + t + '')) : t;
}

function outputBlock(tob: Tob, updateItems: any) {
  let block = `\n## Output\n`;

  if (tob.parserOptions) {
    const cst = updateItems.includes('cst') ? JSON.stringify(tob.$cst, null, 4) : JSON.stringify(tob.cst, null, 4);
    block += `### Hybrid CST
    ${Constants.JavascriptStart}${cst}${Constants.JavascriptEnd}`;
  }
  if (tob.printerOptions) {
    const printed = updateItems.includes('printed') ? tob.$printed : tob.printed;
    block += `### Printed Output
    ${Constants.JavascriptStart}${printed}${Constants.JavascriptEnd}`;
  }

  if (tob.printerOptions) {
    const diagnostics = updateItems.includes('diagnostics') ? tob.$diagnostics : tob.diagnostics;
    block += `### Diagnostics Output
    ${Constants.JavascriptStart}${diagnostics}${Constants.JavascriptEnd}`;
  }

  if (tob.transformOptions) {
    const transform = updateItems.includes('transform')
      ? JSON.stringify(tob.$transform, null, 4)
      : JSON.stringify(tob.transform, null, 4);
    block += `### Transform Output
    ${Constants.JavascriptStart}${transform}${Constants.JavascriptEnd}`;
  }

  return block;
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
