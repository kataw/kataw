import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { EnumMember } from './enum-member';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Enum MembersList
 */
export interface EnumMembersList extends Node {
  readonly enumMembersList: readonly EnumMember[];
}

export function createEnumMembersList(
  enumMembersList: EnumMember[],
  flags: NodeFlags,
  start: number,
  end: number
): EnumMembersList {
  return {
    kind: NodeKind.EnumMembersList,
    enumMembersList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateEnumMembersList(node: EnumMembersList, enumMembersList: EnumMember[]): EnumMembersList {
  return node.enumMembersList !== enumMembersList
    ? updateNode(createEnumMembersList(enumMembersList, node.flags, node.start, node.end), node)
    : node;
}
