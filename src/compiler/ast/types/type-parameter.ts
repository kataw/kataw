import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { IdentifierReference } from '../expressions/identifier-reference';
import { TypeNode } from './';

/**
 * TypeParameter
 */

export interface TypeParameter extends Node {
  readonly name: string | IdentifierReference;
  readonly constraint: TypeNode | null;
  readonly defaultType: TypeNode | null;
}

export function createTypeParameter(
  name: string | IdentifierReference,
  constraint: TypeNode | null,
  defaultType: TypeNode | null,
  start: number,
  end: number
): TypeParameter {
  return {
    kind: NodeKind.TypeParameter,
    name,
    constraint,
    defaultType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
