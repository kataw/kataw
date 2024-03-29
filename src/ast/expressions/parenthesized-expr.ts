import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';

export interface ParenthesizedExpression extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createParenthesizedExpression(
  expression: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): ParenthesizedExpression {
  return {
    kind: SyntaxKind.ParenthesizedExpression,
    expression,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
