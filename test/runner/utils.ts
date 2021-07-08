import { readFile, statSync, readdirSync, writeFile, existsSync } from 'fs';
export const snapshotsFolderName = '__snapshot__';

export const enum ColorCodes {
  BOLD = '\x1b[;1;1m',
  BLINK = '\x1b[;5;1m',
  yellow = '\x1b[33m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  RESET = '\x1b[0m'
}

export const enum Constants {
  Input = '\n## Input\n',
  Options = '## Options',
  ParserOptions = '### Parser Options', // TODO: it's to replace the "Options"(as of now, not used)
  PrinterOptions = '### Printer Options',
  Output = '## Output',
  CST = '### CST',
  Printed = '### Printed',
  Diagnostics = '### Diagnostics',
  JavascriptStart = '\n```javascript\n',
  JavascriptEnd = '\n```\n',
  JsStart = '\n`````js\n',
  JsEnd = '\n`````\n',
  Cases = '### Cases',
  Templates = '### Templates',
  AutoGenOutput = '## Output'
}

export function san(dir: any) {
  return dir
    .trim()
    .replace(/(?:\s|;|,)+/g, '_')
    .replace(/[^a-zA-Z0-9_-]/g, (s: any) => 'x' + s.charCodeAt(0).toString(16).padStart(4, '0'));
}

export function loadSnaps(path: any, file: any, silent: any, dirsToo?: any): any {
  const files: string[] = [];
  const combo = path + file;
  if (existsSync(combo)) {
    if (statSync(combo).isFile()) {
      if (combo.slice(-3) === '.md' && combo.slice(-'README.md'.length) !== 'README.md') {
        files.push(combo);
      }
    } else {
      readdirSync(combo + '/').forEach((s) => files.push(...loadSnaps(combo + '/', s, silent, dirsToo)));
      if (dirsToo) files.push(combo);
    }
  } else {
    report('Could not load file: ' + combo);
  }
  return files;
}

// Make all non-printable ascii chars encoded in tests
export function encodeUnicode(str: string): string {
  return str.replace(/[^\u0020-\u007e\n]/gu, (m: any) => '@{x' + m.codePointAt(0).toString(16) + '}@');
}

export function decodeUnicode(str: string): string {
  return str.replace(/@\{x?([0-9a-z]+)\}@/gi, (_, g) => String.fromCodePoint(parseInt(g, 16)));
}

export function promiseToWriteFile(file: any, data: any): any {
  let res: any;
  let rej: any;
  const p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
  writeFile(file, data, 'utf8', (err: any) => (err ? rej(err) : res()));
  return p;
}

export function promiseToReadFile(file: any) {
  if (!existsSync(file)) console.error(ColorCodes.BLINK + 'File does not exist:' + ColorCodes.RESET + ' ' + file);
  let res: any;
  let rej: any;
  const p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
  readFile(file, 'utf8', (err, data) => (err ? rej(err) : res(data)));
  return p;
}

// deep comparison plain objects
const toString = {}.toString;
export function deepEqual(obj1: any, obj2: any): boolean {
  // NaN, Infinity was stringified to null.
  // refs: https://github.com/kataw/kataw/issues/23
  // v !== v (v = NaN)
  obj1 = obj1 === Infinity || obj1 !== obj1 ? null : obj1;
  obj2 = obj2 === Infinity || obj2 !== obj2 ? null : obj2;

  const type1 = toString.call(obj1);
  const type2 = toString.call(obj2);

  if (type1 !== type2) return false;

  if (type1 === '[object Array]') {
    return obj1.every((_: any, idx: number) => deepEqual(obj1[idx], obj2[idx]));
  }

  if (type1 === '[object Object]') {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && keys1.every((k) => keys2.includes(k) && deepEqual(obj1[k], obj2[k]));
  }

  return obj1 === obj2;
}

export function report(_err: Error | string): void {
  // TODO: skip it for now, as it is breaking auto-gen
  // err = typeof err === 'string' ? new Error(err) : err;
  // const pe = new PrettyError();
  // console.log(pe.render(err));
}

export function toUnixPath(path: string): string{
  return path.replace(/\\/g, "/");
}


export function readMdJs(str: string, flag: string, type = 'string'): string | Record<string, any>{
  const offset = str.indexOf(flag);
  const start1 = str.indexOf(Constants.JsStart, offset);
  const end1 = str.indexOf(Constants.JsEnd, offset);
  const t = str.slice(start1 + Constants.JsStart.length, end1);
  return type === 'object'
    ? (offset === -1 ? {} : eval('0||' + t + ''))
    : t;
}

export function readMdJavascript(str: string, flag: string, type = 'string'): string | Record<string, any> {
  const offset = str.indexOf(flag);
  const start1 = str.indexOf(Constants.JavascriptStart, offset);
  const end1 = str.indexOf(Constants.JavascriptEnd, offset);
  const t = str.slice(start1 + Constants.JavascriptStart.length, end1);
  return type === 'object'
    ? (offset === -1 ? {} : eval('0||' + t + ''))
    : t;
}
