import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface ArrayType extends SyntaxNode {
  readonly type: TypeNode;
}

export function createArrayType(type: TypeNode, start: number, end: number): ArrayType {
  return {
    kind: SyntaxKind.ArrayType,
    type,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
