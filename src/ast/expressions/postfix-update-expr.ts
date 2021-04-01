import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface PostfixUpdateExpression extends SyntaxNode {
  kind: SyntaxKind.PostfixUpdateExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  expression: ExpressionNode;
}

export function createPostfixUpdateExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): PostfixUpdateExpression {
  return {
    kind: SyntaxKind.PostfixUpdateExpression,
    operandToken,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
