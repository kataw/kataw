import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { LeftHandSideExpression } from '.';
import { ArgumentList } from './argument-list';
import { TypeArguments } from '../types/type-arguments';

/**
 * Call expression.
 */
export interface CallExpression extends Node {
  readonly expression: LeftHandSideExpression;
  readonly argumentList: ArgumentList;
  readonly typeArguments: TypeArguments;
}

export function createCallExpression(
  expression: LeftHandSideExpression,
  typeArguments: TypeArguments,
  argumentList: ArgumentList,
  flags: NodeFlags,
  start: number,
  end: number
): CallExpression {
  return {
    kind: NodeKind.CallExpression,
    expression,
    typeArguments,
    argumentList,
    flags,
    intersects: false,
    transformFlags: typeArguments
      ? TransformFlags.TypeScript
      : expression.kind === NodeKind.Super
      ? TransformFlags.LexicalThis
      : TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCallExpression(
  node: CallExpression,
  expression: LeftHandSideExpression,
  typeArguments: TypeArguments,
  argumentList: ArgumentList
): CallExpression {
  return node.expression !== expression || node.typeArguments !== typeArguments || node.argumentList !== argumentList
    ? updateNode(createCallExpression(expression, typeArguments, argumentList, node.flags, node.start, node.end), node)
    : node;
}
