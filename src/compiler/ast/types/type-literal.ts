import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ObjectTypeMembers } from './object-type-members';
/**
 * TypeLiteral
 */

export interface TypeLiteral extends Node {
  readonly objectTypeMembers: ObjectTypeMembers;
}

export function createTypeLiteral(
  objectTypeMembers: ObjectTypeMembers,
  flags: NodeFlags,
  start: number,
  end: number
): TypeLiteral {
  return {
    kind: NodeKind.TypeLiteral,
    objectTypeMembers,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypeLiteral(node: TypeLiteral, objectTypeMembers: ObjectTypeMembers): TypeLiteral {
  return node.objectTypeMembers !== objectTypeMembers
    ? updateNode(createTypeLiteral(objectTypeMembers, node.flags, node.start, node.end), node)
    : node;
}
