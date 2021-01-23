import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
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
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
