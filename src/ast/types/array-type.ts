import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface ArrayType extends SyntaxNode {
  kind: SyntaxKind.ArrayType;
  itemType: TypeNode;
}

export function createArrayType(itemType: TypeNode, start: number, end: number): ArrayType {
  return {
    kind: SyntaxKind.ArrayType,
    itemType,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
