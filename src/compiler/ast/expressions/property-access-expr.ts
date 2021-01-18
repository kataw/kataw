import { LeftHandSideExpression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { PrivateIdentifier } from './private-identifier';
import { IdentifierName } from './identifier-name';

/**
 * Property access expression
 */
export interface PropertyAccessExpression extends Node {
  readonly member: LeftHandSideExpression;
  readonly expression: IdentifierName | PrivateIdentifier;
}

export function createPropertyAccessExpression(
  member: LeftHandSideExpression,
  expression: IdentifierName | PrivateIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyAccessExpression {
  return {
    kind: NodeKind.PropertyAccessExpression,
    member,
    expression,
    flags,
    intersects: false,
    transformFlags:
      expression.kind === NodeKind.Super ? TransformFlags.ES2017 | TransformFlags.ES2018 : TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePropertyAccessExpression(
  node: PropertyAccessExpression,
  member: LeftHandSideExpression,
  expression: IdentifierName | PrivateIdentifier
): PropertyAccessExpression {
  return node.member !== member || node.expression !== expression
    ? updateNode(createPropertyAccessExpression(member, expression, node.flags, node.start, node.end), node)
    : node;
}
