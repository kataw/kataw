import { Expression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { OptionalExpression } from './optional-expr';

/**
 * Element access expression
 */
export interface ElementAccessExpression extends Node {
  readonly member: Expression | OptionalExpression;
  readonly expression: Expression;
}

export function createElementAccessExpression(
  member: Expression,
  expression: Expression | OptionalExpression,
  flags: NodeFlags,
  start: number,
  end: number
): ElementAccessExpression {
  return {
    kind: NodeKind.ElementAccessExpression,
    member,
    expression,
    flags,
    symbol: null,
    transformFlags:
      expression.kind === NodeKind.Super
        ? TransformFlags.ES2017 | TransformFlags.ES2018
        : expression.kind === NodeKind.Super
        ? TransformFlags.LexicalThis
        : TransformFlags.None,
    start,
    end
  };
}

export function updateElementAccessExpression(
  node: ElementAccessExpression,
  member: Expression,
  expression: Expression | OptionalExpression
): ElementAccessExpression {
  return node.member !== member || node.expression !== expression
    ? updateNode(createElementAccessExpression(member, expression, node.flags, node.start, node.end), node)
    : node;
}
