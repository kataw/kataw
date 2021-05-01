import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface BigIntLiteral extends SyntaxNode {
  readonly text: string;
  readonly original: string;
  readonly rawText: string;
}

export function createBigIntLiteral(
  text: string,
  original: string,
  rawText: string,
  start: number,
  end: number
): BigIntLiteral {
  return {
    kind: SyntaxKind.BigIntLiteral,
    text,
    original,
    rawText,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
