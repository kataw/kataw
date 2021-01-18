import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * StringKeyword
 */

export type StringKeyword = Node;

export function createStringKeyword(start: number, end: number): StringKeyword {
  return {
    kind: NodeKind.StringKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
