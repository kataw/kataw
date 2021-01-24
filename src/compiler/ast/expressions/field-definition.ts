import { Node, NodeKind, NodeFlags, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { PrivateIdentifier } from './private-identifier';
import { Expression } from './';
import { AssignmentExpression } from './assignment-expr';
import { TypeNode } from '../types';
import { DecoratorList } from './decorator-list';

/**
 * FieldDefinition
 */
export interface FieldDefinition extends Node {
  readonly key: Expression | PrivateIdentifier;
  readonly optional: boolean;
  readonly exclamation: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly decorators: DecoratorList;
  readonly accessModifiers: AccessModifiers;
  readonly isStatic: boolean;
}

export function createFieldDefinition(
  key: Expression | PrivateIdentifier,
  optional: boolean,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList,
  accessModifiers: AccessModifiers,
  isStatic: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FieldDefinition {
  return {
    kind: NodeKind.FieldDefinition,
    key,
    optional,
    exclamation,
    type,
    initializer,
    decorators,
    accessModifiers,
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
  optional: boolean,
  exclamation: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList,
  isStatic: boolean
): FieldDefinition {
  return node.key !== key ||
    node.optional !== optional ||
    node.exclamation !== exclamation ||
    node.type !== type ||
    node.initializer !== initializer ||
    node.decorators !== decorators ||
    node.isStatic !== isStatic
    ? updateNode(
        createFieldDefinition(
          key,
          optional,
          exclamation,
          type,
          initializer,
          decorators,
          node.accessModifiers,
          isStatic,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
