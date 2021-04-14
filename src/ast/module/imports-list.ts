import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ImportSpecifier } from './import-specifier';

export interface ImportsList extends SyntaxNode {
  readonly specifiers: ImportSpecifier[];
}

export function createImportsList(
  specifiers: ImportSpecifier[],
  flags: NodeFlags,
  start: number,
  end: number
): ImportsList {
  return {
    kind: SyntaxKind.ImportsList,
    specifiers,
    autofix: AutoFix.NotFixable,
    flags,
    start,
    end
  };
}
