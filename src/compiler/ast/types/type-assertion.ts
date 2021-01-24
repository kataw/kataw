import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): TypeAssertion {
  return {
    kind: NodeKind.TypeAssertion,
    type,
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

export function updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: UnaryExpression): TypeAssertion {
  return node.type !== type || node.expression !== expression
    ? updateNode(createTypeAssertion(type, expression, node.flags, node.start, node.end), node)
    : node;
}
