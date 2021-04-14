import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface UnaryExpression extends SyntaxNode {
  readonly operandToken: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createUnaryExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): UnaryExpression {
  return {
    kind: SyntaxKind.UnaryExpression,
    operandToken,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
