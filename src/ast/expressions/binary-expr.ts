import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from './';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Binary expression.
 */
export interface BinaryExpression extends SyntaxNode {
  readonly left: ExpressionNode;
  readonly operatorToken: SyntaxToken<TokenSyntaxKind>;
  readonly right: ExpressionNode;
}

export function createBinaryExpression(
  left: ExpressionNode,
  operatorToken: SyntaxToken<TokenSyntaxKind>,
  right: ExpressionNode,
  start: number,
  end: number
): BinaryExpression {
  return {
    kind: SyntaxKind.BinaryExpression,
    left,
    operatorToken,
    right,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
