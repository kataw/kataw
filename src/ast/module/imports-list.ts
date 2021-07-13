import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
