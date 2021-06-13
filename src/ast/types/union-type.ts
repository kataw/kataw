import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface UnionType extends SyntaxNode {
  readonly types: readonly TypeNode[];
}

export function createUnionType(types: readonly TypeNode[], start: number, end: number): UnionType {
  return {
    kind: SyntaxKind.UnionType,
    types,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
