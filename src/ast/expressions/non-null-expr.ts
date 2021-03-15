import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '.';

/**
 * Non null expression
 */
export interface NonNullExpression extends Node {
  expression: Expression;
}

export function createNonNullExpression(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): NonNullExpression {
  return {
    kind: NodeKind.NonNullExpression,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateNonNullExpression(node: NonNullExpression, expression: Expression): NonNullExpression {
  return node.expression !== expression
    ? updateNode(createNonNullExpression(expression, node.flags, node.start, node.end), node)
    : node;
}
