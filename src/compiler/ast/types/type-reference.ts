import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { QualifiedName } from './qualified-name';
import { TypeArguments } from './type-arguments';

/**
 * An identifier used in a context where it is
 * referring to the name of a type.
 */

export interface TypeReference extends Node {
  readonly typeName: IdentifierReference | string | QualifiedName;
  readonly typeArguments: TypeArguments;
}

export function createTypeReference(
  typeName: IdentifierReference | string | QualifiedName,
  typeArguments: TypeArguments,
  flags: NodeFlags,
  start: number,
  end: number
): TypeReference {
  return {
    kind: NodeKind.TypeReference,
    typeName,
    typeArguments,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTypeReference(
  node: TypeReference,
  typeName: IdentifierReference | string | QualifiedName,
  typeArguments: TypeArguments
): TypeReference {
  return node.typeName !== typeName || node.typeArguments !== typeArguments
    ? updateNode(createTypeReference(typeName, typeArguments, node.flags, node.start, node.end), node)
    : node;
}
