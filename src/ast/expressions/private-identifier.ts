import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * PrivateIdentifier
 */
export interface PrivateIdentifier extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createPrivateIdentifier(text: string, rawText: string, start: number, end: number): PrivateIdentifier {
  return {
    kind: SyntaxKind.PrivateIdentifier,
    text,
    rawText,
    flags: NodeFlags.NoChildren | NodeFlags.ExpressionNode,
    start,
    end
  };
}
