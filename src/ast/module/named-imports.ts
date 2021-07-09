import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ImportsList } from './imports-list';

export interface NamedImports extends SyntaxNode {
  readonly importsList: ImportsList;
}

export function createNamedImports(importsList: ImportsList, start: number, end: number): NamedImports {
  return {
    kind: SyntaxKind.NamedImports,
    importsList,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
