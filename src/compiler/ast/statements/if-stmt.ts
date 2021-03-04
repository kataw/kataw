import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { Expression } from '../expressions/index';

/**
 * An if statement with an optional else branch.
 */
export interface IfStatement extends Node {
  readonly expression: Expression;
  /** Statement executed when expression is `true`. */
  readonly consequent: Statement;
  /** Statement executed when expression is `false`. */
  readonly alternate: Statement | null;
  readonly isWebCompat: boolean;
}

export function createIfStatement(
  expression: Expression,
  consequent: Statement,
  alternate: Statement | null,
  isWebCompat: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): IfStatement {
  return {
    kind: NodeKind.IfStatement,
    expression,
    consequent,
    alternate,
    isWebCompat,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateIfStatement(
  node: IfStatement,
  expression: Expression,
  consequent: Statement,
  alternate: Statement | null
): IfStatement {
  return node.expression !== expression || node.consequent !== consequent || node.alternate !== alternate
    ? updateNode(
        createIfStatement(expression, consequent, alternate, node.isWebCompat, node.flags, node.start, node.end),
        node
      )
    : node;
}
