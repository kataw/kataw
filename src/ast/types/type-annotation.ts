import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeAnnotation extends SyntaxNode {
  readonly type: TypeNode;
}

export function createTypeAnnotation(type: TypeNode, start: number, end: number): TypeAnnotation {
  return {
    kind: SyntaxKind.TypeAnnotation,
    type,
    flags: NodeFlags.IsTypeNode,
    start,
    end
  };
}
