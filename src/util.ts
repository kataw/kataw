import { writeFileSync, readFile, readFileSync, statSync, readdirSync, writeFile, existsSync } from 'fs';

export function getFiles(path: string, file: string, silent: any, dirsToo?: any) {
  const files: string[] = [];
  const combo = path + file;
  if (existsSync(combo)) {
    if (statSync(combo).isFile()) {
      if (combo.slice(-3) === '.js') {
        files.push(combo);
      }
    } else {
      readdirSync(combo + '/').forEach((s) => files.push(...getFiles(combo + '/', s, silent, dirsToo)));
      if (dirsToo) files.push(combo);
    }
  } else {
    console.log('Could not load file: ' + combo);
  }
  return files;
}

export function readConfig() {
  if (existsSync('./kataw.json')) {
    return JSON.parse(readFileSync('./kataw.json', 'utf8'));
  }
}

export function getSourceFile(fileName: string, onError?: (message: string) => void) {}

/**
 * Strip comments from file content.
 */
export function stripComments(content: string): string {
  /**
   * First capturing group matches double quoted string
   * Second matches single quotes string
   * Third matches block comments
   * Fourth matches line comments
   */
  const regexp: RegExp =
    /("(?:[^\\\"]*(?:\\.)?)*")|('(?:[^\\\']*(?:\\.)?)*')|(\/\*(?:\r?\n|.)*?\*\/)|(\/{2,}.*?(?:(?:\r?\n)|$))/g;
  const result = content.replace(regexp, (match: string, _m1: string, _m2: string, m3: string, m4: string) => {
    // Only one of m1, m2, m3, m4 matches
    if (m3 !== undefined) {
      // A block comment. Replace with nothing
      return '';
    } else if (m4 !== undefined) {
      // A line comment. If it ends in \r?\n then keep it.
      const length = m4.length;
      if (length > 2 && m4[length - 1] === '\n') {
        return m4[length - 2] === '\r' ? '\r\n' : '\n';
      } else {
        return '';
      }
    } else {
      // We match a string
      return match;
    }
  });
  return result;
}

export function arrayify<T>(arg?: T | T[]): T[] {
  if (Array.isArray(arg)) {
    return arg;
  } else if (arg != undefined) {
    return [arg];
  } else {
    return [];
  }
}

export function camelize(stringWithHyphens: string): string {
  return stringWithHyphens.replace(/-(.)/g, (_, nextLetter) => (nextLetter as string).toUpperCase());
}

export function find<T, U>(inputs: T[], getResult: (t: T) => U | undefined): U | undefined {
  for (const element of inputs) {
    const result = getResult(element);
    if (result !== undefined) {
      return result;
    }
  }
  return undefined;
}
