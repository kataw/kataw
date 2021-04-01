import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface PrefixUpdateExpression extends SyntaxNode {
  kind: SyntaxKind.PrefixUpdateExpression;
  operandToken: SyntaxToken<TokenSyntaxKind>;
  expression: ExpressionNode;
}

export function createPrefixUpdateExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): PrefixUpdateExpression {
  return {
    kind: SyntaxKind.PrefixUpdateExpression,
    operandToken,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
