import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '.';
import { AssignmentExpression } from './assignment-expr';
import { BindingElement } from './binding-element';
import { BindingIdentifier } from './binding-identifier';
import { IdentifierName } from './identifier-name';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './bigint-literal';
import { StringLiteral } from './string-literal';
import { ComputedPropertyName } from './computed-property-name';
import { DecoratorList } from './decorator-list';
import { AccessModifier } from '../types/access-modifier';

export type PropertyKey = IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;

/**
 * Property name
 */
export interface PropertyDefinition extends Node {
  readonly left: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;
  readonly right: AssignmentExpression | BindingElement | BindingIdentifier | Expression;
  readonly decorators: DecoratorList | null;
  readonly accessModifier: AccessModifier | null;
}

export function createPropertyDefinition(
  left: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: AssignmentExpression | BindingElement | BindingIdentifier,
  decorators: DecoratorList | null,
  accessModifier: AccessModifier | null,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinition {
  return {
    kind: NodeKind.PropertyDefinition,
    left,
    right,
    accessModifier,
    decorators,
    flags,
    intersects: false,
    transformFlags: accessModifier ? TransformFlags.TypeScript : TransformFlags.None,
    start,
    end
  };
}

export function updatePropertyDefinition(
  node: PropertyDefinition,
  left: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  right: AssignmentExpression | BindingElement | BindingIdentifier,
  decorators: DecoratorList | null,
  accessModifier: AccessModifier | null
): PropertyDefinition {
  return node.left !== left ||
    node.right !== right ||
    node.decorators !== decorators ||
    node.accessModifier !== accessModifier
    ? updateNode(
        createPropertyDefinition(left, right, decorators, accessModifier, node.flags, node.start, node.end),
        node
      )
    : node;
}
