import { Expression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { UpdateOp } from './prefix-update-expr';

// https://tc39.github.io/ecma262/#prod-UpdateExpression

export interface PostfixUpdateExpression extends Node {
  readonly operator: UpdateOp;
  readonly operand: Expression;
}

export function createPostfixUpdateExpression(
  operator: UpdateOp,
  operand: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): PostfixUpdateExpression {
  return {
    kind: NodeKind.PostfixUpdateExpression,
    operator,
    operand,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePostfixUpdateExpression(
  node: PostfixUpdateExpression,
  operand: Expression
): PostfixUpdateExpression {
  return node.operand !== operand
    ? updateNode(createPostfixUpdateExpression(node.operator, operand, node.flags, node.start, node.end), node)
    : node;
}
