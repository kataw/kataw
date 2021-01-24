import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { CallSignature } from './call-signature';
import { ConstructSignature } from './construct-signature';
import { PropertySignature } from './property-signature';
import { IndexSignature } from './index-signature';

/**
 * ObjectTypeMembers
 */

export type TypeMembers = CallSignature | ConstructSignature | PropertySignature | IndexSignature;

export interface ObjectTypeMembers extends Node {
  readonly members: readonly TypeMembers[];
}

export function createObjectTypeMembers(
  members: readonly TypeMembers[],
  flags: NodeFlags,
  start: number,
  end: number
): ObjectTypeMembers {
  return {
    kind: NodeKind.ObjectTypeMembers,
    members,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateObjectTypeMembers(node: ObjectTypeMembers, members: readonly TypeMembers[]): ObjectTypeMembers {
  return node.members !== members
    ? updateNode(createObjectTypeMembers(members, node.flags, node.start, node.end), node)
    : node;
}
