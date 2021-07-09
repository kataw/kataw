import { printSource } from '../../src/printer';
import { parseScript, parseModule } from '../../src/kataw';
import { promiseToReadFile, promiseToWriteFile, Constants, deepEqual, readMdJs, readMdJavascript } from './utils';
import { visit } from './visit';
import { strict as assert } from 'assert';

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
  mismatchItems: string[];
}

export function updateTob(tob: Tob, updateItems: string[]): void {
  const outputIndex = tob.content.indexOf(Constants.Output);
  const output = outputBlock(tob, updateItems);
  const header = outputIndex > -1 ? tob.content.slice(0, outputIndex) : tob.content;
  tob.content = header + output;
  return promiseToWriteFile(tob.filename, tob.content);
}

export async function file2Tob(filename: string, check = false): Promise<Tob> {
  const content: any = await promiseToReadFile(filename);

  const tob: Tob = {
    filename,
    content,
    input: <string>readMdJs(content, Constants.Input, 'string'),
    parserOptions: readMdJs(content, Constants.Options, 'object'), // TODO: change "options" => "parser options"
    printerOptions: readMdJs(content, Constants.PrinterOptions, 'object'),
    cst: readMdJavascript(content, Constants.CST, 'string'),
    printed: readMdJavascript(content, Constants.Printed, 'string'),
    diagnostics: readMdJavascript(content, Constants.Diagnostics, 'string'),
    mismatchItems: []
  };
  const diagnostics: any[] = [];
  const cb = function (...args: any[]) {
    diagnostics.push(args);
  };
  const cst = (tob.parserOptions.module ? parseModule : parseScript)(tob.input, tob.parserOptions, cb);

  // assert the cst is valid
  visit(cst, tob.filename);

  tob.$cst = JSON.stringify(cst, null, 4);
  tob.$printed = diagnostics.length === 0 ? printSource(cst, tob.printerOptions) : '';
  tob.$diagnostics = diagnostics2md(diagnostics);

  // check the pirnted code
  if (tob.$printed && check) {
    const $$diagnostics: any[] = [];
    const cb = function (...args: any[]) {
      $$diagnostics.push(args);
    };
    const _printedCst = (tob.parserOptions.module ? parseModule : parseScript)(tob.$printed, tob.parserOptions, cb);
    assert.equal($$diagnostics.length, diagnostics.length, `file: ${tob.filename} printed code is invalid!`);
  }

  !deepEqual(tob.cst, tob.$cst) && tob.mismatchItems.push('cst');
  !deepEqual(tob.printed, tob.$printed) && tob.mismatchItems.push('printed');
  !deepEqual(tob.diagnostics, tob.$diagnostics) && tob.mismatchItems.push('diagnostics');

  return tob;
}

export function isMatchedTob(tob: Tob): boolean {
  return (
    deepEqual(tob.cst, tob.$cst) && deepEqual(tob.printed, tob.$printed) && deepEqual(tob.diagnostics, tob.$diagnostics)
  );
}

function outputBlock(tob: Tob, updateItems: any) {
  return `${Constants.Output}

${Constants.CST}
${Constants.JavascriptStart}${updateItems.includes('parser') ? tob.$cst : tob.cst}${Constants.JavascriptEnd}
${Constants.Printed}
${Constants.JavascriptStart}${updateItems.includes('printer') ? tob.$printed : tob.printed}${Constants.JavascriptEnd}
${Constants.Diagnostics}
${Constants.JavascriptStart}${updateItems.includes('parser') ? tob.$diagnostics : tob.diagnostics}${
    Constants.JavascriptEnd
  }
`;
}

function diagnostics2md(diagnostics: any) {
  let diagnosticString = '';
  if (diagnostics.length) {
    diagnostics.forEach(function (a: any) {
      diagnosticString += '✖ ' + a[2] + ' - start: ' + a[3] + ', end: ' + a[4];
      diagnosticString += '\n';
    });
  } else {
    diagnosticString += '✔ No errors';
  }

  return diagnosticString;
}
