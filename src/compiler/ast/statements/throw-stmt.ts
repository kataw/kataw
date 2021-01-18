import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression } from '../expressions/index';

/**
 * Throw statement.
 */
export interface ThrowStatement extends Node {
  readonly expression: Expression;
}

export function createThrowStatement(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ThrowStatement {
  return {
    kind: NodeKind.ThrowStatement,
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

export function updateThrowStatement(node: ThrowStatement, expression: Expression): ThrowStatement {
  return node.expression !== expression
    ? updateNode(createThrowStatement(expression, node.flags, node.start, node.end), node)
    : node;
}
