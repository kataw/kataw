import { readFile, statSync, readdirSync, writeFile, existsSync } from 'fs';

export const enum ColorCodes {
  BOLD = '\x1b[;1;1m',
  BLINK = '\x1b[;5;1m',
  yellow = '\x1b[33m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  RESET = '\x1b[0m'
}

export const enum Constants {
  Output = '\n## Output\n',
  Header = '\n### Hybrid CST\n',
  Printed = '\n### Printed\n',
  Diagnostics = '\n### Diagnostics\n',
  JavascriptStart = '\n```javascript\n',
  JavascriptEnd = '\n```\n',
  Options = '\n## Options\n',
  Input = '\n## Input\n',
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

export function getTestFiles(path: any, file: any, silent: any, dirsToo?: any): any {
  const files: string[] = [];
  const combo = path + file;
  if (statSync(combo).isFile()) {
    if (combo.slice(-3) === '.md' && combo.slice(-'README.md'.length) !== 'README.md') {
      files.push(combo);
    }
  } else {
    readdirSync(combo + '/').forEach((s) => files.push(...getTestFiles(combo + '/', s, silent, dirsToo)));
    if (dirsToo) files.push(combo);
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
  data = encodeUnicode(data);
  writeFile(file, data, 'utf8', (err: any) => (err ? rej(err) : res()));
  return p;
}

export function promiseToReadFile(file: any) {
  if (!existsSync(file)) console.error(ColorCodes.BLINK + 'File does not exist:' + ColorCodes.RESET + ' ' + file);
  let res: any;
  let rej: any;
  const p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
  readFile(file, 'utf8', (err, data) =>
    err ? rej(err) : res({ file, previous: decodeUnicode(data), data: decodeUnicode(data) })
  );
  return p;
}
