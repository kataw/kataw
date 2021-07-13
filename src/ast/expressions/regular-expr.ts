import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

/**
 * Regular expression
 */
export interface RegularExpressionLiteral extends SyntaxNode {
  readonly text: string;
}

export function createRegularExpressionLiteral(text: string, start: number, end: number): RegularExpressionLiteral {
  return {
    kind: SyntaxKind.RegularExpressionLiteral,
    text,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
