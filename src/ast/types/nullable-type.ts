import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface NullableType extends SyntaxNode {
  readonly type: TypeNode;
}

export function createNullableType(type: TypeNode, start: number, end: number): NullableType {
  return {
    kind: SyntaxKind.NullableType,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
