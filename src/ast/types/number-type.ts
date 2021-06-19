import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NumberType extends SyntaxNode {
  readonly text: number;
}

export function createNumberType(text: number, start: number, end: number): NumberType {
  return {
    kind: SyntaxKind.NumberType,
    text,
    flags: NodeFlags.IsTypeNode | NodeFlags.NoChildren,
    start,
    end
  };
}
