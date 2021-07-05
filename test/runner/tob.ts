import { printSource } from '../../src/printer3';
import { parseScript, parseModule } from '../../src/kataw';
import { promiseToReadFile, promiseToWriteFile, Constants, report, deepEqual } from './utils';
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

export function updateTob(tob: any, updateItems: any): void {
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
    input: md2input(content),
    parserOptions: md2parserOptions(content),
    printerOptions: md2printerOptions(content),
    cst: md2cst(content),
    printed: md2printed(content),
    diagnostics: md2diagnostics(content),
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
function md2printerOptions(_str: string) {
  return {
    tabWidth: 2,
    printWidth: 80,
    useTabs: false,
    bracketSpacing: true
  };
}

function md2cst(str: string) {
  const offset = str.indexOf(Constants.CST);
  if (offset === 0) report('Missing input header');
  const start = str.indexOf(Constants.JavascriptStart, offset);
  if (start === 0) report('Should have the start of a test case');
  const end = str.indexOf(Constants.JavascriptEnd, offset);
  if (end === 0) report('Should have the end of a test case');
  const t = str.slice(start + Constants.JavascriptStart.length, end);
  return t;
}

function md2printed(str: string) {
  const cstOffset = str.indexOf(Constants.Printed);
  if (cstOffset === 0) report('should have an input header');
  const start = str.indexOf(Constants.JavascriptStart, cstOffset);
  if (start === 0) report('Should have the start of a test case');
  const end = str.indexOf(Constants.JavascriptEnd, cstOffset);
  if (end === 0) report('Should have the end of a test case');
  return str.slice(start + Constants.JavascriptStart.length, end);
}

function md2diagnostics(str: string) {
  const diagnosticsOffset = str.indexOf(Constants.Diagnostics);
  const start = str.indexOf(Constants.JavascriptStart, diagnosticsOffset);
  const end = str.indexOf(Constants.JavascriptEnd, diagnosticsOffset);
  return str.slice(start + Constants.JavascriptStart.length, end);
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
