import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from './';
import { ArgumentList } from './argument-list';

/**
 * New expression.
 */
export interface NewExpression extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly argumentList: ArgumentList | null;
}

export function createNewExpression(
  expression: ExpressionNode,
  argumentList: ArgumentList | null,
  start: number,
  end: number
): NewExpression {
  return {
    kind: SyntaxKind.NewExpression,
    expression,
    argumentList,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
