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
  type: TypeNode | null,
  initializer: Expression | null
): PropertySignature {
  return node.name !== name || node.type !== type || node.initializer !== initializer
    ? updateNode(
        createPropertySignature(
          name,
          node.optional,
          node.accessModifiers,
          type,
          node.readonly,
          initializer,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
