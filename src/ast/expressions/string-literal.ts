import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

export interface StringLiteral extends SyntaxNode {
  readonly kind: SyntaxKind.StringLiteral;
  readonly text: string;
  readonly rawText: string;
}

export function createStringLiteral(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringLiteral {
  return {
    kind: SyntaxKind.StringLiteral,
    text,
    rawText,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
