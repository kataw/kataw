import { Expression } from './';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { UniqueIdentifier } from '../internal/unique-identifier';

// The set of syntax tokens which are valid binary expression operators
export type BinaryOperator =
  | '||'
  | '&&'
  | '|'
  | '^'
  | '&'
  | '=='
  | '!='
  | '==='
  | '!=='
  | '<'
  | '<='
  | '>'
  | '>='
  | 'in'
  | 'instanceof'
  | '<<'
  | '>>'
  | '>>>'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '**'
  | '??';

/**
 * Binary expression.
 */
export interface BinaryExpression extends Node {
  readonly left: Expression;
  readonly operator: BinaryOperator;
  readonly right: Expression | UniqueIdentifier;
}

export function createBinaryExpression(
  left: Expression,
  operator: BinaryOperator,
  right: Expression | UniqueIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): BinaryExpression {
  return {
    kind: NodeKind.BinaryExpression,
    left,
    operator,
    right,
    flags,
    symbol: null,
    transformFlags:
      operator === '**'
        ? TransformFlags.ES2016
        : operator === '??'
        ? TransformFlags.ES2016 | TransformFlags.ES2020
        : TransformFlags.None,
    start,
    end
  };
}

export function updateBinaryExpression(
  node: BinaryExpression,
  left: Expression,
  right: Expression | UniqueIdentifier
): BinaryExpression {
  return node.left !== left || node.right !== right
    ? updateNode(createBinaryExpression(left, node.operator, right, node.flags, node.start, node.end), node)
    : node;
}
