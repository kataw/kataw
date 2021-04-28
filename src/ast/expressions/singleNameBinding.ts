import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { Identifier } from './identifier-expr';

/**
 * Singlename binding
 */
export interface SingleNameBinding extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly left: Identifier;
  readonly right: ExpressionNode | null;
}

export function createSingleNameBinding(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  left: Identifier,
  right: ExpressionNode | null,
  start: number,
  end: number
): SingleNameBinding {
  return {
    kind: SyntaxKind.SingleNameBinding,
    ellipsisToken,
    left,
    right,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
