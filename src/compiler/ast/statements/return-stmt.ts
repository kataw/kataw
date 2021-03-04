import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '../expressions/index';

/**
 * Return statement.
 */
export interface ReturnStatement extends Node {
  readonly expression: Expression | null;
}

export function createReturnStatement(
  expression: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): ReturnStatement {
  return {
    kind: NodeKind.ReturnStatement,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateReturnStatement(node: ReturnStatement, expression: Expression | null): ReturnStatement {
  return node.expression !== expression
    ? updateNode(createReturnStatement(expression, node.flags, node.start, node.end), node)
    : node;
}
