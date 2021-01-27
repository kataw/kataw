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
import { AccessModifiers } from '../types/access-modifiers';

export type PropertyKey = IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;

/**
 * Property name
 */
export interface PropertyDefinition extends Node {
  readonly key: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName;
  readonly value: AssignmentExpression | BindingElement | BindingIdentifier | Expression;
  readonly decorators: DecoratorList;
  readonly accessModifiers: AccessModifiers[];
}

export function createPropertyDefinition(
  key: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  value: AssignmentExpression | BindingElement | BindingIdentifier,
  decorators: DecoratorList,
  accessModifiers: AccessModifiers[],
  flags: NodeFlags,
  start: number,
  end: number
): PropertyDefinition {
  return {
    kind: NodeKind.PropertyDefinition,
    key,
    value,
    accessModifiers,
    decorators,
    flags,
    intersects: false,
    transformFlags: accessModifiers ? TransformFlags.TypeScript : TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePropertyDefinition(
  node: PropertyDefinition,
  key: IdentifierName | NumericLiteral | BigIntLiteral | StringLiteral | ComputedPropertyName,
  value: AssignmentExpression | BindingElement | BindingIdentifier
): PropertyDefinition {
  return node.key !== key || node.value !== value
    ? updateNode(
        createPropertyDefinition(key, value, node.decorators, node.accessModifiers, node.flags, node.start, node.end),
        node
      )
    : node;
}
