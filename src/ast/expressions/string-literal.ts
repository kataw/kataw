import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface StringLiteral extends SyntaxNode {
  readonly kind: SyntaxKind.StringLiteral;
  readonly text: string;
  readonly original: string;
  readonly rawText: string;
}

export function createStringLiteral(
  text: string,
  original: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringLiteral {
  return {
    kind: SyntaxKind.StringLiteral,
    text,
    original,
    rawText,
    flags,
    start,
    end
  };
}
