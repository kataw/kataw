import { parse, Options } from '../parser/parser';
import { Context, OnError } from '../parser/common';
import { RootNode } from '../ast/rootNode';

// TODO: Add type checker and linter

function isFunction(obj: any): boolean {
  return !!(obj && obj.constructor && obj.call && obj.apply);
}

// Note: The 'filename' is the name on the file being parsed
export function cli(
  source: string,
  filename: string,
  isModule: boolean,
  disableWebCompat: boolean,
  onError: OnError,
  _options?: Options // linter options
): RootNode {
  let context = Context.TopLevel;
  if (isModule) context |= Context.Module | Context.Strict | Context.AllowImportMeta;
  if (!isFunction(onError)) throw 'Require error callback!';
  return parse(source, filename, context, isModule, onError, {
    // types is on by default in the CLI
    allowTypes: true,
    // allow 'ESNext' proposals
    next: true,
    // Disables AnnexB
    disableWebCompat
  });
}
