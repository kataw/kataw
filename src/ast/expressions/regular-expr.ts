import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

/**
 * Regular expression
 */
export interface RegularExpressionLiteral extends SyntaxNode {
  readonly text: string;
  readonly rawText: string;
}

export function createRegularExpressionLiteral(text: string, rawText: string, start: number, end: number): RegularExpressionLiteral {
  return {
    kind: SyntaxKind.RegularExpressionLiteral,
    text,
    rawText,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
