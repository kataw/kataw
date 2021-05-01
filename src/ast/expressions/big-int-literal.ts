import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface BigIntLiteral extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createBigIntLiteral(text: string, rawText: string, start: number, end: number): BigIntLiteral {
  return {
    kind: SyntaxKind.BigIntLiteral,
    text,
    rawText,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
