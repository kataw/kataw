import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NumericLiteral extends SyntaxNode {
  readonly text: number;
  readonly original: string;
  readonly rawText: string;
}

export function createNumericLiteral(
  text: number,
  original: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumericLiteral {
  return {
    kind: SyntaxKind.NumericLiteral,
    text,
    original,
    rawText,
    flags,
    start,
    end
  };
}
