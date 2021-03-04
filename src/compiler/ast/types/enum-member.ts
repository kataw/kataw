import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression, PropertyName } from '../expressions';
import { EnumMembersList } from './enum-members-list';

/**
 * Enum member
 */
export interface EnumMember extends Node {
  readonly name: PropertyName;
  readonly initializer: Expression | null;
}

export function createEnumMember(
  name: PropertyName,
  initializer: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): EnumMember {
  return {
    kind: NodeKind.EnumMembers,
    name,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateEnumMember(node: EnumMember, name: PropertyName, initializer: Expression | null): EnumMember {
  return node.name !== name || node.initializer !== initializer
    ? updateNode(createEnumMember(name, initializer, node.flags, node.start, node.end), node)
    : node;
}
