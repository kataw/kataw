import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

export interface ParenthesizedExpression extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createParenthesizedExpression(
  expression: ExpressionNode,
  start: number,
  end: number
): ParenthesizedExpression {
  return {
    kind: SyntaxKind.ParenthesizedExpression,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
