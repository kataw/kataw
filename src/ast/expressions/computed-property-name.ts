import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

import { Expression } from '.';
import { updateNode } from '../../utils';

export interface ComputedPropertyName extends Node {
  readonly expression: Expression;
}

export function createComputedPropertyName(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ComputedPropertyName {
  return {
    kind: NodeKind.ComputedPropertyName,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015 | TransformFlags.ComputedPropertyName,
    start,
    end
  };
}

export function updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName {
  return node.expression !== expression
    ? updateNode(createComputedPropertyName(expression, node.flags, node.start, node.end), node)
    : node;
}
