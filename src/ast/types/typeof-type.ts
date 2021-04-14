import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeofType extends SyntaxNode {
  kind: SyntaxKind.TypeofType;
  type: TypeNode;
}

export function createTypeofType(type: TypeNode, start: number, end: number): TypeofType {
  return {
    kind: SyntaxKind.TypeofType,
    type,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    start,
    end
  };
}
