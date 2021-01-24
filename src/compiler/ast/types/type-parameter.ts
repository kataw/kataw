import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameter {
  return {
    kind: NodeKind.TypeParameter,
    name,
    constraint,
    defaultType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTypeParameter(
  node: TypeParameter,
  name: string | IdentifierReference,
  constraint: TypeNode | null,
  defaultType: TypeNode | null
): TypeParameter {
  return node.name !== name || node.constraint !== constraint || node.defaultType !== defaultType
    ? updateNode(createTypeParameter(name, constraint, defaultType, node.flags, node.start, node.end), node)
    : node;
}
