import { LeftHandSideExpression } from '.';
import { Node, NodeKind, NodeFlags } from '../node';
import { updateNode } from '../../utils';

// https://tc39.github.io/ecma262/#prod-UpdateExpression

export type UpdateOp = '++' | '--';

export interface PrefixUpdateExpression extends Node {
  readonly operator: UpdateOp;
  readonly operand: LeftHandSideExpression;
}

export function createPrefixUpdateExpression(
  operator: UpdateOp,
  operand: LeftHandSideExpression,
  flags: NodeFlags,
  start: number,
  end: number
): PrefixUpdateExpression {
  return {
    kind: NodeKind.PrefixUpdateExpression,
    operator,
    operand,
    flags,
    intersects: false,
    transformFlags: 0,
    start,
    end
  };
}

export function updatePrefixUpdateExpression(
  node: PrefixUpdateExpression,
  operand: LeftHandSideExpression
): PrefixUpdateExpression {
  return node.operand !== operand
    ? updateNode(createPrefixUpdateExpression(node.operator, operand, node.flags, node.start, node.end), node)
    : node;
}
