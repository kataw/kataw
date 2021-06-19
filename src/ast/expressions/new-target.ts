import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * New target expression.
 */
export interface NewTarget extends SyntaxNode {
  readonly newKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly targetIdentifier: SyntaxToken<TokenSyntaxKind>;
}

export function createNewTarget(
  newKeyword: SyntaxToken<TokenSyntaxKind>,
  targetIdentifier: SyntaxToken<TokenSyntaxKind>,
  start: number,
  end: number
): NewTarget {
  return {
    kind: SyntaxKind.NewTarget,
    newKeyword,
    targetIdentifier,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    start,
    end
  };
}
