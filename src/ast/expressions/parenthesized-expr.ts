import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { Expression } from '.';
import { CommaOperator } from './commaOperator';

/**
 * Parenthesized expression
 *
 * - https://tc39.es/ecma262/#prod-ParenthesizedExpression
 *
 */

export interface ParenthesizedExpression extends Node {
  readonly expression: Expression | CommaOperator;
}

export function createParenthesizedExpression(
  expression: Expression | CommaOperator,
  flags: NodeFlags,
  start: number,
  end: number
): ParenthesizedExpression {
  return {
    kind: NodeKind.ParenthesizedExpression,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateParenthesizedExpression(
  node: ParenthesizedExpression,
  expression: Expression | CommaOperator
): ParenthesizedExpression {
  return node.expression !== expression
    ? updateNode(createParenthesizedExpression(expression, node.flags, node.start, node.end), node)
    : node;
}
