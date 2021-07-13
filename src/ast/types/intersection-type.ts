import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface IntersectionType extends SyntaxNode {
  kind: SyntaxKind.IntersectionType;
  types: readonly TypeNode[];
}

export function createIntersectionType(types: readonly TypeNode[], start: number, end: number): IntersectionType {
  return {
    kind: SyntaxKind.IntersectionType,
    types,
    flags: NodeFlags.IsTypeNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
