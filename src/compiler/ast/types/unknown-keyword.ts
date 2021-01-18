import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * UnknownKeyword
 */

export type UnknownKeyword = Node;

export function createUnknownKeyword(start: number, end: number): UnknownKeyword {
  return {
    kind: NodeKind.UnknownKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
