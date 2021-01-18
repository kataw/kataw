import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * ObjectKeyword
 */

export type ObjectKeyword = Node;

export function createObjectKeyword(start: number, end: number): ObjectKeyword {
  return {
    kind: NodeKind.ObjectKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
