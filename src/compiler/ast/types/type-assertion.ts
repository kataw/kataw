import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ObjectTypeMembers } from './object-type-members';
import { UnaryExpression } from '../expressions/unary-expr';
import { TypeNode } from '.';

/**
 * TypeAssertion
 */

export interface TypeAssertion extends Node {
  readonly type: TypeNode;
  readonly expression: UnaryExpression;
}

export function createTypeAssertion(
  type: TypeNode,
  expression: UnaryExpression,
  start: number,
  end: number
): TypeAssertion {
  return {
    kind: NodeKind.TypeAssertion,
    type,
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
