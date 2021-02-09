import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from './';
import { ArgumentList } from './argument-list';
import { TypeArguments } from '../types/type-arguments';

/**
 * New expression.
 */
export interface NewExpression extends Node {
  readonly expression: Expression;
  readonly typeArguments: TypeArguments | null;
  readonly argumentList: ArgumentList;
}

export function createNewExpression(
  expression: Expression,
  typeArguments: TypeArguments | null,
  argumentList: ArgumentList,
  flags: NodeFlags,
  start: number,
  end: number
): NewExpression {
  return {
    kind: NodeKind.NewExpression,
    expression,
    typeArguments,
    argumentList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2020,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateNewExpression(
  node: NewExpression,
  expression: Expression,
  typeArguments: TypeArguments | null,
  argumentList: ArgumentList
): NewExpression {
  return node.expression !== expression || node.typeArguments !== typeArguments || node.argumentList !== argumentList
    ? updateNode(createNewExpression(expression, typeArguments, argumentList, node.flags, node.start, node.end), node)
    : node;
}
