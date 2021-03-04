import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): EnumDeclaration {
  return {
    kind: NodeKind.EnumDeclaration,
    name,
    members,
    isConst,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateEnumDeclaration(
  node: EnumDeclaration,
  name: IdentifierReference,
  members: EnumMembersList,
  isConst: boolean
): EnumDeclaration {
  return node.name !== name || node.members !== members
    ? updateNode(createEnumDeclaration(name, members, isConst, node.flags, node.start, node.end), node)
    : node;
}
