import { parse } from './parser';

export function parseScript(source: string, _options: any) {
  return parse(source, /* filename */ '__root__', /* isModule */ false);
}

export function parseModule(source: string, _options: any) {
  return parse(source, /* filename */ '__root__', /* isModule */ true);
}
