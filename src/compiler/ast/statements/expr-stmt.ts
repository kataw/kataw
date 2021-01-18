import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

import { Expression } from '../expressions/index';
import { updateNode } from '../../../visitor/common';

/**
 * An expression statement.
 */
export interface ExpressionStatement extends Node {
  readonly expression: Expression;
}

export function createExpressionStatement(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ExpressionStatement {
  return {
    kind: NodeKind.ExpressionStatement,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateExpressionStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement {
  return node.expression !== expression
    ? updateNode(createExpressionStatement(expression, node.flags, node.start, node.end), node)
    : node;
}
