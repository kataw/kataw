import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * BigInt literal
 */
export interface BigIntLiteral extends Node {
  readonly text: number;
  readonly rawText: string;
}

export function createBigIntLiteral(
  text: number,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): BigIntLiteral {
  return {
    kind: NodeKind.BigIntLiteral,
    text,
    rawText,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ESNext,
    start,
    end
  };
}
