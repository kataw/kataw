import { Expression } from './';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { AssignmentExpression } from './assignment-expr';
import { BinaryExpression } from './binary-expr';

/**
 * Conditional expression.
 */
export interface ConditionalExpression extends Node {
  readonly shortCircuit: Expression;
  readonly consequent: AssignmentExpression;
  readonly alternate: AssignmentExpression;
}

export function createConditionalExpression(
  shortCircuit: BinaryExpression | Expression,
  consequent: AssignmentExpression,
  alternate: AssignmentExpression,
  flags: NodeFlags,
  start: number,
  end: number
): ConditionalExpression {
  return {
    kind: NodeKind.ConditionalExpression,
    shortCircuit,
    consequent,
    alternate,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateConditionalExpression(
  node: ConditionalExpression,
  shortCircuit: BinaryExpression | Expression,
  consequent: AssignmentExpression,
  alternate: AssignmentExpression
): ConditionalExpression {
  return node.shortCircuit !== shortCircuit || node.consequent !== consequent || node.alternate !== alternate
    ? updateNode(
        createConditionalExpression(shortCircuit, consequent, alternate, node.flags, node.start, node.end),
        node
      )
    : node;
}
