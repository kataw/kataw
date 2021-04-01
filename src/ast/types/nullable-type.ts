import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface NullableType extends SyntaxNode {
  kind: SyntaxKind.NullableType;
  type: TypeNode;
}

export function createNullableType(type: TypeNode, start: number, end: number): NullableType {
  return {
    kind: SyntaxKind.NullableType,
    type,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
