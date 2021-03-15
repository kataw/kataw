import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Null literal
 */
export interface NullLiteral extends Node {
  text: null;
}

export function createNullLiteral(flags: NodeFlags, start: number, end: number): NullLiteral {
  return {
    kind: NodeKind.NullLiteral,
    text: null,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
