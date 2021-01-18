import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NeverKeyword
 */

export type NeverKeyword = Node;

export function createNeverKeyword(start: number, end: number): NeverKeyword {
  return {
    kind: NodeKind.NeverKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
