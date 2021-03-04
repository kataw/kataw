import { BlockStatement } from './block-stmt';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';

/**
 * With statements
 */
export interface WithStatement extends Node {
  readonly expression: Expression;
  readonly statement: Statement | BlockStatement;
}

export function createWithStatement(
  expression: Expression,
  statement: Statement | BlockStatement,
  flags: NodeFlags,
  start: number,
  end: number
): WithStatement {
  return {
    kind: NodeKind.WithStatement,
    expression,
    statement,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateWithStatement(node: WithStatement, expression: Expression, statement: Statement): WithStatement {
  return node.expression !== expression || node.statement !== statement
    ? updateNode(createWithStatement(expression, statement, node.flags, node.start, node.end), node)
    : node;
}
