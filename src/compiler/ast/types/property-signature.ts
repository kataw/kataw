import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { Expression, PropertyName } from '../expressions';
import { TypeNode } from './';

/**
 * PropertySignature
 */

export interface PropertySignature extends Node {
  readonly name: PropertyName;
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifiers: AccessModifiers;
  readonly initializer: Expression | null;
}

export function createPropertySignature(
  name: PropertyName,
  optional: boolean,
  accessModifiers: AccessModifiers,
  type: TypeNode | null,
  readonly: boolean,
  initializer: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): PropertySignature {
  return {
    kind: NodeKind.PropertySignature,
    name,
    optional,
    accessModifiers,
    type,
    readonly,
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
  optional: boolean,
  type: TypeNode | null,
  readonly: boolean,
  initializer: Expression | null
): PropertySignature {
  return node.name !== name ||
    node.optional !== optional ||
    node.type !== type ||
    node.readonly !== readonly ||
    node.initializer !== initializer
    ? updateNode(
        createPropertySignature(
          name,
          optional,
          node.accessModifiers,
          type,
          readonly,
          initializer,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
