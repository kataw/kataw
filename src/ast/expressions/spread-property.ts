import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Spread property
 */
export interface SpreadProperty extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly argument: ExpressionNode;
}

export function createSpreadProperty(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  argument: ExpressionNode,
  start: number,
  end: number
): SpreadProperty {
  return {
    kind: SyntaxKind.SpreadProperty,
    ellipsisToken,
    argument,
    flags: NodeFlags.ExpressionNode | NodeFlags.DisallowTrailingComma,
    start,
    end
  };
}
