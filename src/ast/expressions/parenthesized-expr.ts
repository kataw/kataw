import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

export interface ParenthesizedExpression extends SyntaxNode {
  kind: SyntaxKind.ParenthesizedExpression;
  expression: ExpressionNode;
}

export function createParenthesizedExpression(
  expression: ExpressionNode,
  start: number,
  end: number
): ParenthesizedExpression {
  return {
    kind: SyntaxKind.ParenthesizedExpression,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
