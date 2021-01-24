import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';

/**
 * Type alias declaration
 */

export interface TypeAliasDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly type: TypeNode;
  readonly typeParameters: TypeParameters;
  readonly isExported: boolean;
}

export function createTypeAliasDeclaration(
  name: IdentifierReference,
  type: TypeNode,
  typeParameters: TypeParameters,
  isExported: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TypeAliasDeclaration {
  return {
    kind: NodeKind.TypeAliasDeclaration,
    name,
    type,
    typeParameters,
    isExported,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTypeAliasDeclaration(
  node: TypeAliasDeclaration,
  name: IdentifierReference,
  type: TypeNode,
  typeParameters: TypeParameters,
  isExported: boolean
): TypeAliasDeclaration {
  return node.name !== name ||
    node.type !== type ||
    node.typeParameters !== typeParameters ||
    node.isExported !== isExported
    ? updateNode(
        createTypeAliasDeclaration(name, type, typeParameters, node.isExported, node.flags, node.start, node.end),
        node
      )
    : node;
}
