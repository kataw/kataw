import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { ArgumentList } from './argument-list';

export interface CallExpression extends SyntaxNode {
  kind: SyntaxKind.CallExpression;
  expression: ExpressionNode;
  argumentList: ArgumentList;
}

export function createCallExpression(
  expression: ExpressionNode,
  argumentList: ArgumentList,
  start: number,
  end: number
): CallExpression {
  return {
    kind: SyntaxKind.CallExpression,
    expression,
    argumentList,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
