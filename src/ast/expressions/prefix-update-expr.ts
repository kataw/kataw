import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface PrefixUpdateExpression extends SyntaxNode {
  readonly operandToken: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
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
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
