import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NeverKeyword
 */

export type NeverKeyword = Node;

export function createNeverKeyword(flags: NodeFlags, start: number, end: number): NeverKeyword {
  return {
    kind: NodeKind.NeverKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
