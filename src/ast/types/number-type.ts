import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NumberType extends SyntaxNode {
  readonly value: number;
}

export function createNumberType(value: number, start: number, end: number): NumberType {
  return {
    kind: SyntaxKind.NumberType,
    value,
    flags: NodeFlags.None,
    start,
    end
  };
}
