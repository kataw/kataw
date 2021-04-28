import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface BooleanLiteral extends SyntaxNode {
  readonly text: boolean;
}

export function createBooleanLiteral(text: boolean, flags: NodeFlags, start: number, end: number): BooleanLiteral {
  return {
    kind: SyntaxKind.BooleanLiteral,
    text,
    flags,
    start,
    end
  };
}
