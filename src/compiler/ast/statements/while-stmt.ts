import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { Statement } from '.';
import { Expression } from '../expressions/index';

/**
 * A list of statements.
 */
export interface WhileStatement extends Node {
  readonly expression: Expression;
  readonly statement: Statement;
}

export function createWhileStatement(
  expression: Expression,
  statement: Statement,
  flags: NodeFlags,
  start: number,
  end: number
): WhileStatement {
  return {
    kind: NodeKind.WhileStatement,
    expression,
    statement,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateWhileStatement(
  node: WhileStatement,
  expression: Expression,
  statement: Statement
): WhileStatement {
  return node.expression !== expression || node.statement !== statement
    ? updateNode(createWhileStatement(expression, statement, node.flags, node.start, node.end), node)
    : node;
}
