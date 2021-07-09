import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { ArgumentList } from './argument-list';

export interface CallExpression extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly argumentList: ArgumentList;
}

export function createCallExpression(
  expression: ExpressionNode,
  argumentList: ArgumentList,
  flags: NodeFlags,
  start: number,
  end: number
): CallExpression {
  return {
    kind: SyntaxKind.CallExpression,
    expression,
    argumentList,
    flags,
    transformFlags: TransformFlags.CallExpression,
    start,
    end
  };
}
