import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Boolean literal expression.
 */
export interface BooleanLiteral extends Node {
  readonly text: boolean;
}

export function createBooleanLiteral(text: boolean, flags: NodeFlags, start: number, end: number): BooleanLiteral {
  return {
    kind: NodeKind.BooleanLiteral,
    text,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
