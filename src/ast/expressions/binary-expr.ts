import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from './';

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
  flags: NodeFlags,
  start: number,
  end: number
): BinaryExpression {
  return {
    kind: SyntaxKind.BinaryExpression,
    left,
    operatorToken,
    right,
    flags,
    start,
    end
  };
}
