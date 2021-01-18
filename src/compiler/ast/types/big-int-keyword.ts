import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * BigIntKeyword
 */

export type BigIntKeyword = Node;

export function createBigIntKeyword(start: number, end: number): BigIntKeyword {
  return {
    kind: NodeKind.BigIntKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
