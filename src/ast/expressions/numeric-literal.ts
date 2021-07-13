import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

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
    kind: SyntaxKind.NumericLiteral,
    text,
    rawText,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
