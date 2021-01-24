import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { TypeParameters } from './type-parameter-list';
import { HeritageClauses } from './heritage-clauses';
import { ObjectTypeMembers } from './object-type-members';

/**
 * InterfaceDeclaration
 */

export interface InterfaceDeclaration extends Node {
  readonly name: string | IdentifierReference;
  readonly typeParameters: TypeParameters;
  readonly heritageClauses: HeritageClauses | null;
  readonly objectTypeMembers: ObjectTypeMembers;
  readonly isExported: boolean;
}

export function createInterfaceDeclaration(
  name: IdentifierReference,
  typeParameters: TypeParameters,
  heritageClauses: HeritageClauses | null,
  objectTypeMembers: ObjectTypeMembers,
  isExported: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): InterfaceDeclaration {
  return {
    kind: NodeKind.InterfaceDeclaration,
    name,
    typeParameters,
    heritageClauses,
    objectTypeMembers,
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

export function updateInterfaceDeclaration(
  node: InterfaceDeclaration,
  name: IdentifierReference,
  typeParameters: TypeParameters,
  heritageClauses: HeritageClauses | null,
  objectTypeMembers: ObjectTypeMembers
): InterfaceDeclaration {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.heritageClauses !== heritageClauses ||
    node.objectTypeMembers !== objectTypeMembers
    ? updateNode(
        createInterfaceDeclaration(
          name,
          typeParameters,
          heritageClauses,
          objectTypeMembers,
          node.isExported,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
