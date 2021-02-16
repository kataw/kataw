import { readFile, statSync, readdirSync } from 'fs';

export const enum ColorCodes {
  BOLD = '\x1b[;1;1m',
  BLINK = '\x1b[;5;1m',
  yellow = '\x1b[33m',
  RED = '\x1b[31m',
  GREEN = '\x1b[32m',
  RESET = '\x1b[0m'
}

export const enum Templates {
  OUTPUT_HEADER = '\n## Output\n',
  OUTPUT_HEADER_SLOPPY = '\n### Hybrid CST\n',
  OUTPUT_HEADER_PRINTED = '\n### Printed\n',
  OUTPUT_HEADER_STRICT = '\n### Strict mode\n',
  OUTPUT_HEADER_MODULE = '\n### Module goal\n',
  OUTPUT_HEADER_WEB = '\n### Web compat mode\n',
  OUTPUT_HEADER_DIAGNOSTICS = '\n### Diagnostics\n',
  OUTPUT_CODE = '\n```javascript\n',
  OUTPUT_CODE1 = '\n```\n'
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
  let combo = path + file;
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

export async function readFiles(files: any) {
  let list = await Promise.all(
    files.map((file: any) => {
      let res: any,
        rej: any,
        p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
      readFile(file, 'utf8', (err, data) => (err ? rej(err) : res({ file, _data: data, data })));
      return p;
    })
  );
  return list;
}
