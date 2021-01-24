import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NumberKeyword
 */

export type NumberKeyword = Node;

export function createNumberKeyword(flags: NodeFlags, start: number, end: number): NumberKeyword {
  return {
    kind: NodeKind.NumberKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
