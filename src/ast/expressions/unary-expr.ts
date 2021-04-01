import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface UnaryExpression extends SyntaxNode {
  kind: SyntaxKind.UnaryExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  expression: ExpressionNode;
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
