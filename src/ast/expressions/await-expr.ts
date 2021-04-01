import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * An await expression.
 */
export interface AwaitExpression extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createAwaitExpression(expression: ExpressionNode, start: number, end: number): AwaitExpression {
  return {
    kind: SyntaxKind.AwaitExpression,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
