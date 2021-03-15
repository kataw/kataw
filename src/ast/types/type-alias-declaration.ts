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
  readonly typeParameters: TypeParameters | null;
}

export function createTypeAliasDeclaration(
  name: IdentifierReference,
  type: TypeNode,
  typeParameters: TypeParameters | null,
  flags: NodeFlags,
  start: number,
  end: number
): TypeAliasDeclaration {
  return {
    kind: NodeKind.TypeAliasDeclaration,
    name,
    type,
    typeParameters,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypeAliasDeclaration(
  node: TypeAliasDeclaration,
  name: IdentifierReference,
  type: TypeNode,
  typeParameters: TypeParameters | null
): TypeAliasDeclaration {
  return node.name !== name || node.type !== type || node.typeParameters !== typeParameters
    ? updateNode(createTypeAliasDeclaration(name, type, typeParameters, node.flags, node.start, node.end), node)
    : node;
}
