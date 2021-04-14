import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface ArrayType extends SyntaxNode {
  kind: SyntaxKind.ArrayType;
  itemType: TypeNode;
}

export function createArrayType(itemType: TypeNode, start: number, end: number): ArrayType {
  return {
    kind: SyntaxKind.ArrayType,
    itemType,
    flags: NodeFlags.None,
    start,
    end
  };
}
