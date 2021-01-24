import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * BooleanKeyword
 */

export type BooleanKeyword = Node;

export function createBooleanKeyword(flags: NodeFlags, start: number, end: number): BooleanKeyword {
  return {
    kind: NodeKind.BooleanKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
