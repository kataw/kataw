import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

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
    intersects: false,
    transformFlags: TransformFlags.ES2017 | TransformFlags.ES2018 | TransformFlags.Await,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateAwaitExpression(node: AwaitExpression, expression: Expression): AwaitExpression {
  return node.expression !== expression
    ? updateNode(createAwaitExpression(expression, node.flags, node.start, node.end), node)
    : node;
}
