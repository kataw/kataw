import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * An super call expression.
 */
export type Super = Node;

export function createSuper(flags: NodeFlags, start: number, end: number): Super {
  return {
    kind: NodeKind.Super,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
