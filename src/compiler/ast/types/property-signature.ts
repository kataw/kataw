import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
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
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
