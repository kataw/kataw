import { readdirSync } from 'fs';
import { dirname, join } from 'path';

export const DEFAULT_CONFIG: any = {
  files: [],
  module: false,
  typecheck: false,
  linter: {
    enable: true,
    extends: ['kataw:recommended'],
    rules: new Map<string, Partial<any>>(),
    rulesDirectory: []
  },
  minify: {
    enable: false,
    options: {}
  },
  prettify: {
    enable: true,
    options: {}
  }
};

export function findup(directory: string): string | undefined {
  while (true) {
    const res = findFile(directory);
    if (res !== undefined) {
      return join(directory, res);
    }

    const parent = dirname(directory);
    if (parent === directory) {
      return undefined;
    }
    directory = parent;
  }

  function findFile(cwd: string): string | undefined {
    const dirFiles = readdirSync(cwd);

    const index = dirFiles.indexOf('kataw.json');
    if (index > -1) {
      return 'kataw.json';
    }
    const result = dirFiles.find((entry: string) => entry.toLowerCase() === 'kataw.json');
    if (result !== undefined) return result;

    return undefined;
  }
}
