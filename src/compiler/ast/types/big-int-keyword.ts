import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * BigIntKeyword
 */

export type BigIntKeyword = Node;

export function createBigIntKeyword(flags: NodeFlags, start: number, end: number): BigIntKeyword {
  return {
    kind: NodeKind.BigIntKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
