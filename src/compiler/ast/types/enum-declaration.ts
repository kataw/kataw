import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { EnumMembersList } from './enum-members-list';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Enum declaration
 */
export interface EnumDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly members: EnumMembersList;
  readonly isConst: boolean;
}

export function createEnumDeclaration(
  name: IdentifierReference,
  members: EnumMembersList,
  isConst: boolean,
  start: number,
  end: number
): EnumDeclaration {
  return {
    kind: NodeKind.EnumDeclaration,
    name,
    members,
    isConst,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
