import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { Expression, PropertyName } from '../expressions';
import { EnumMembersList } from './enum-members-list';

/**
 * Enum member
 */
export interface EnumMember extends Node {
  readonly name: PropertyName;
  readonly initializer: Expression | null;
  readonly parent: EnumMembersList | null;
}

export function createEnumMember(
  name: PropertyName,
  initializer: Expression | null,
  start: number,
  end: number
): EnumMember {
  return {
    kind: NodeKind.EnumMembers,
    name,
    initializer,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
