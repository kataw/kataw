import { Expression } from './';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { BinaryExpression } from './binary-expr';

/**
 * Conditional expression.
 */
export interface ConditionalExpression extends Node {
  readonly shortCircuit: Expression;
  readonly consequent: Expression;
  readonly alternate: Expression;
}

export function createConditionalExpression(
  shortCircuit: BinaryExpression | Expression,
  consequent: Expression,
  alternate: Expression,
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
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateConditionalExpression(
  node: ConditionalExpression,
  shortCircuit: BinaryExpression | Expression,
  consequent: Expression,
  alternate: Expression
): ConditionalExpression {
  return node.shortCircuit !== shortCircuit || node.consequent !== consequent || node.alternate !== alternate
    ? updateNode(
        createConditionalExpression(shortCircuit, consequent, alternate, node.flags, node.start, node.end),
        node
      )
    : node;
}
