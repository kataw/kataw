import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { PrivateIdentifier } from './private-identifier';
import { Expression } from './';
import { AssignmentExpression } from './assignment-expr';
import { TypeNode } from '../types';
import { DecoratorList } from './decorator-list';
import { AccessModifier } from '../types/access-modifier';
import { PropertyKind } from '../../parser/common';

/**
 * FieldDefinition
 */
export interface FieldDefinition extends Node {
  readonly key: Expression | PrivateIdentifier;
  readonly isReadOnly: boolean;
  readonly isOptional: boolean;
  readonly exclamation: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly decorators: DecoratorList | null;
  readonly accessModifier: AccessModifier | null;
  readonly isStatic: boolean;
}

export function createFieldDefinition(
  key: Expression | PrivateIdentifier,
  propertyKind: PropertyKind,
  isOptional: boolean,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList | null,
  accessModifier: AccessModifier | null,
  isStatic: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FieldDefinition {
  if (propertyKind & PropertyKind.Declare) flags |= NodeFlags.Declared;
  return {
    kind: NodeKind.FieldDefinition,
    key,
    isReadOnly: (propertyKind & PropertyKind.Readonly) !== 0,
    isOptional,
    exclamation,
    type,
    initializer,
    decorators,
    accessModifier,
    isStatic,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ClassFields | TransformFlags.ESNext,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateFieldDefinition(
  node: FieldDefinition,
  key: Expression | PrivateIdentifier,
  isReadOnly: boolean,
  isOptional: boolean,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList | null,
  accessModifier: AccessModifier | null,
  isStatic: boolean
): FieldDefinition {
  return node.key !== key ||
    node.isOptional !== isOptional ||
    node.exclamation !== exclamation ||
    node.type !== type ||
    node.initializer !== initializer ||
    node.decorators !== decorators ||
    node.accessModifier !== accessModifier ||
    node.isStatic !== isStatic
    ? updateNode(
        createFieldDefinition(
          key,
          isReadOnly ? PropertyKind.Readonly : PropertyKind.None,
          isOptional,
          exclamation,
          type,
          initializer,
          decorators,
          accessModifier,
          isStatic,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
