import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * UndefinedKeyword
 */

export type UndefinedKeyword = Node;

export function createUndefinedKeyword(start: number, end: number): UndefinedKeyword {
  return {
    kind: NodeKind.UndefinedKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
