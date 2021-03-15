import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * An super call expression.
 */
export type Super = Node;

export function createSuper(flags: NodeFlags, start: number, end: number): Super {
  return {
    kind: NodeKind.Super,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
