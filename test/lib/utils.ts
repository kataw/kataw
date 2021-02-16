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
  OUTPUT_HEADER = '\n## Output\n',
  OUTPUT_HEADER_SLOPPY = '\n### Hybrid CST\n',
  OUTPUT_HEADER_PRINTED = '\n### Printed\n',
  OUTPUT_HEADER_STRICT = '\n### Strict mode\n',
  OUTPUT_HEADER_MODULE = '\n### Module goal\n',
  OUTPUT_HEADER_WEB = '\n### Web compat mode\n',
  OUTPUT_HEADER_DIAGNOSTICS = '\n### Diagnostics\n',
  OUTPUT_CODE = '\n```javascript\n',
  OUTPUT_CODE1 = '\n```\n',
  Options_HEADER = '\n## Options\n',
  INPUT_HEADER = '\n## Input\n',
  INPUT_START = '\n`````js\n',
  INPUT_END = '\n`````\n',
  CASE_HEAD = '### Cases',
  TPL_HEAD = '### Templates',
  OUT_HEAD = '## Output'
}
export const enum State {
  True = 1,
  Negative = -1,
  PARSE_MODE_DIV = 0,
  USE_SLOPPY_MODE = 1,
  USE_STRICT_MODE = 2,
  PARSE_MODE_REGEX = 4,
  PARSE_MODE_TICK = 8,
  WEB_COMPAT_ALWAYS = 16,
  WEB_COMPAT_NEVER = 32
}

export function san(dir: any) {
  return dir
    .trim()
    .replace(/(?:\s|;|,)+/g, '_')
    .replace(/[^a-zA-Z0-9_-]/g, (s: any) => 'x' + s.charCodeAt(0).toString(16).padStart(4, '0'));
}

export function getTestFiles(path: any, file: any, files: any, silent: any, dirsToo?: any): any {
  const combo = path + file;
  if (!statSync(combo).isFile()) {
    //    if (!silent) LOG('getTestFiles dir:', path + file);
    readdirSync(combo + '/').forEach((s) => getTestFiles(combo + '/', s, files, silent, dirsToo));
    if (dirsToo) files.push(combo);
  } else {
    if (combo.slice(-3) === '.md' && combo.slice(-'README.md'.length) !== 'README.md') {
      //    if (!silent) LOG('getTestFiles file:', path + file);
      files.push(combo);
    }
  }
}
/*
export function encodeUnicode(str: string): string {
  return str.replace(/[^\u0020-\u007e\n]/ug, m => '@{x'+m.codePointAt(0).toString(16)+'}@');
}

export function decodeUnicode(str: string): string {
  return str.replace(/@\{x?([0-9a-z]+)\}@/gi, (_, g) => String.fromCodePoint(parseInt(g, 16)));
}
*/

export function promiseToWriteFile(file: any, data: any): any {
  let res: any;
  let rej: any;
  const p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
  // data = encodeUnicode(data);
  writeFile(file, data, 'utf8', (err: any) => (err ? rej(err) : res()));
  return p;
}

export function promiseToReadFile(file: any) {
  if (!existsSync(file)) console.error(ColorCodes.BLINK + 'File does not exist:' + ColorCodes.RESET + ' ' + file);
  let res: any,
    rej: any,
    p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
  readFile(file, 'utf8', (err, data) => (err ? rej(err) : res({ file, previous: data, data })));
  return p;
}
