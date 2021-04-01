import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { Identifier } from './identifier-expr';

/**
 * SingleNameBinding
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
