import { LeftHandSideExpression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

// The set of syntax tokens which are valid unary expression operators
export type UnaryOperator = '+' | '-' | '!' | '~' | 'delete' | 'void' | 'typeof';

// see: https://tc39.github.io/ecma262/#prod-UnaryExpression
export interface UnaryExpression extends Node {
  readonly operator: UnaryOperator;
  readonly operand: LeftHandSideExpression;
}

export function createUnaryExpression(
  operator: UnaryOperator,
  operand: LeftHandSideExpression,
  flags: NodeFlags,
  start: number,
  end: number
): UnaryExpression {
  return {
    kind: NodeKind.UnaryExpression,
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

export function updateUnaryExpression(node: UnaryExpression, operand: LeftHandSideExpression): UnaryExpression {
  return node.operand !== operand
    ? updateNode(createUnaryExpression(node.operator, operand, node.flags, node.start, node.end), node)
    : node;
}
