import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { EnumMember } from './enum-member';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Enum MembersList
 */
export interface EnumMembersList extends Node {
  readonly enumMembersList: readonly EnumMember[];
}

export function createEnumMembersList(enumMembersList: EnumMember[], start: number, end: number): EnumMembersList {
  return {
    kind: NodeKind.EnumMembersList,
    enumMembersList,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
