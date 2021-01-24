import { UnaryExpression } from '../expressions/unary-expr';
import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * MinusType
 */

export interface MinusType extends Node {
  readonly expression: UnaryExpression;
}

export function createMinusType(expression: UnaryExpression, flags: NodeFlags, start: number, end: number): MinusType {
  return {
    kind: NodeKind.MinusType,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateMinusType(node: MinusType, expression: UnaryExpression): MinusType {
  return node.expression !== expression
    ? updateNode(createMinusType(expression, node.flags, node.start, node.end), node)
    : node;
}
