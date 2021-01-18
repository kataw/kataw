import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ObjectTypeMembers } from './object-type-members';
/**
 * TypeLiteral
 */

export interface TypeLiteral extends Node {
  readonly objectTypeMembers: ObjectTypeMembers;
}

export function createTypeLiteral(objectTypeMembers: ObjectTypeMembers, start: number, end: number): TypeLiteral {
  return {
    kind: NodeKind.TypeLiteral,
    objectTypeMembers,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
