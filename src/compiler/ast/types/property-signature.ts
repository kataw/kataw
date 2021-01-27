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
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifier: AccessModifier | null;
  readonly initializer: Expression | null;
}

export function createPropertySignature(
  name: PropertyName,
  optional: boolean,
  accessModifier: AccessModifier | null,
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
    accessModifier,
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
  initializer: Expression | null,
  accessModifier: AccessModifier | null
): PropertySignature {
  return node.name !== name ||
    node.optional !== optional ||
    node.type !== type ||
    node.readonly !== readonly ||
    node.accessModifier !== accessModifier ||
    node.initializer !== initializer
    ? updateNode(
        createPropertySignature(
          name,
          optional,
          accessModifier,
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
