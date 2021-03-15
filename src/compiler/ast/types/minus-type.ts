import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '../expressions';

/**
 * MinusType
 */

export interface MinusType extends Node {
  readonly expression: Expression;
}

export function createMinusType(expression: Expression, flags: NodeFlags, start: number, end: number): MinusType {
  return {
    kind: NodeKind.MinusType,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateMinusType(node: MinusType, expression: Expression): MinusType {
  return node.expression !== expression
    ? updateNode(createMinusType(expression, node.flags, node.start, node.end), node)
    : node;
}
