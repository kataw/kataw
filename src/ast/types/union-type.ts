import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface UnionType extends SyntaxNode {
  kind: SyntaxKind.UnionType;
  types: readonly TypeNode[];
}

export function createUnionType(types: readonly TypeNode[], start: number, end: number): UnionType {
  return {
    kind: SyntaxKind.UnionType,
    types,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
