import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from '.';

export interface TypeofType extends SyntaxNode {
  readonly type: TypeNode;
}

export function createTypeofType(type: TypeNode, start: number, end: number): TypeofType {
  return {
    kind: SyntaxKind.TypeofType,
    type,
    flags: NodeFlags.None,
    start,
    end
  };
}
