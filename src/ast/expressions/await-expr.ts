import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

/**
 * An await expression.
 */
export interface AwaitExpression extends SyntaxNode {
  readonly awaitToken: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createAwaitExpression(
  awaitToken: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): AwaitExpression {
  return {
    kind: SyntaxKind.AwaitExpression,
    awaitToken,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
