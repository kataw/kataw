import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * StringKeyword
 */

export type StringKeyword = Node;

export function createStringKeyword(flags: NodeFlags, start: number, end: number): StringKeyword {
  return {
    kind: NodeKind.StringKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
