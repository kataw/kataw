import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '../expressions';

/**
 * PartiallyEmittedExpression
 */

export interface PartiallyEmittedExpression extends Node {
  readonly expression: Expression;
}

export function createPartiallyEmittedExpression(
  expression: Expression,
  original: any,
  flags: NodeFlags,
  start: number,
  end: number
): PartiallyEmittedExpression {
  return {
    kind: NodeKind.PartiallyEmittedExpression,
    expression,
    original,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updatePartiallyEmittedExpression(
  node: PartiallyEmittedExpression,
  expression: Expression
): PartiallyEmittedExpression {
  return node.expression !== expression
    ? updateNode(createPartiallyEmittedExpression(expression, node.original, node.flags, node.start, node.end), node)
    : node;
}
