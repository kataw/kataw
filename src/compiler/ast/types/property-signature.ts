import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression, PropertyName } from '../expressions';
import { TypeNode } from './';
import { AccessModifier } from './access-modifier';

/**
 * PropertySignature
 */

export interface PropertySignature extends Node {
  readonly name: PropertyName;
  readonly isOptional: boolean;
  readonly type: TypeNode | null;
  readonly isStatic: boolean;
  readonly isReadOnly: boolean;
  readonly accessModifier: AccessModifier | null;
  readonly initializer: Expression | null;
}

export function createPropertySignature(
  name: PropertyName,
  isOptional: boolean,
  accessModifier: AccessModifier | null,
  type: TypeNode | null,
  isStatic: boolean,
  isReadOnly: boolean,
  initializer: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): PropertySignature {
  return {
    kind: NodeKind.PropertySignature,
    name,
    isOptional,
    accessModifier,
    type,
    isStatic,
    isReadOnly,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatePropertySignature(
  node: PropertySignature,
  name: PropertyName,
  isOptional: boolean,
  type: TypeNode | null,
  isReadOnly: boolean,
  initializer: Expression | null,
  accessModifier: AccessModifier | null
): PropertySignature {
  return node.name !== name ||
    node.isOptional !== isOptional ||
    node.type !== type ||
    node.isReadOnly !== isReadOnly ||
    node.accessModifier !== accessModifier ||
    node.initializer !== initializer
    ? updateNode(
        createPropertySignature(
          name,
          isOptional,
          accessModifier,
          type,
          node.isStatic,
          isReadOnly,
          initializer,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
