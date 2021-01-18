import { UnaryExpression } from '../expressions/unary-expr';
import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * MinusType
 */

export interface MinusType extends Node {
  readonly expression: UnaryExpression;
}

export function createMinusType(expression: UnaryExpression, start: number, end: number): MinusType {
  return {
    kind: NodeKind.MinusType,
    expression,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
