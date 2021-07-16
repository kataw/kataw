import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface PrefixUpdateExpression extends SyntaxNode {
  readonly operandToken: SyntaxToken<TokenSyntaxKind>;
  readonly operand: ExpressionNode;
}

export function createPrefixUpdateExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  operand: ExpressionNode,
  start: number,
  end: number
): PrefixUpdateExpression {
  return {
    kind: SyntaxKind.PrefixUpdateExpression,
    operandToken,
    operand,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.PrefixUpdateOrUnary,
    start,
    end
  };
}
