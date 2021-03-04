import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '../expressions';
import { TypeNode } from '.';

/**
 * TypeAssertion
 */

export interface TypeAssertion extends Node {
  readonly type: TypeNode;
  readonly expression: Expression;
}

export function createTypeAssertion(
  type: TypeNode,
  expression: Expression,
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
    start,
    end
  };
}

export function updateTypeAssertion(node: TypeAssertion, type: TypeNode, expression: Expression): TypeAssertion {
  return node.type !== type || node.expression !== expression
    ? updateNode(createTypeAssertion(type, expression, node.flags, node.start, node.end), node)
    : node;
}
