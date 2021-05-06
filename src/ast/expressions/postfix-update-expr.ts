import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface PostfixUpdateExpression extends SyntaxNode {
  readonly operandToken: SyntaxToken<TokenSyntaxKind>;
  readonly operand: ExpressionNode;
}

export function createPostfixUpdateExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  operand: ExpressionNode,
  start: number,
  end: number
): PostfixUpdateExpression {
  return {
    kind: SyntaxKind.PostfixUpdateExpression,
    operandToken,
    operand,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
