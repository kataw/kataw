import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { Expression } from '.';

/**
 * An await expression.
 */
export interface AwaitExpression extends Node {
  readonly expression: Expression;
}

export function createAwaitExpression(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): AwaitExpression {
  return {
    kind: NodeKind.AwaitExpression,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2017 | TransformFlags.ES2018 | TransformFlags.Await,
    start,
    end
  };
}

export function updateAwaitExpression(node: AwaitExpression, expression: Expression): AwaitExpression {
  return node.expression !== expression
    ? updateNode(createAwaitExpression(expression, node.flags, node.start, node.end), node)
    : node;
}
