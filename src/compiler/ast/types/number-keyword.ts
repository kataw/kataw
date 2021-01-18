import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NumberKeyword
 */

export type NumberKeyword = Node;

export function createNumberKeyword(start: number, end: number): NumberKeyword {
  return {
    kind: NodeKind.NumberKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
