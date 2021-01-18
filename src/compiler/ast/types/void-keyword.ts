import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * UndefinedKeyword
 */

export type VoidKeyword = Node;

export function createVoidKeyword(start: number, end: number): VoidKeyword {
  return {
    kind: NodeKind.VoidKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
