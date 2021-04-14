import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface NumericLiteral extends SyntaxNode {
  readonly text: number;
  readonly rawText: string;
}

export function createNumericLiteral(
  text: number,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumericLiteral {
  return {
    kind: SyntaxKind.Identifier,
    text,
    rawText,
    flags,
    start,
    end
  };
}
