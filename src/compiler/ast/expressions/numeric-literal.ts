import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Numeric literal
 */
export interface NumericLiteral extends Node {
  readonly text: number;
  readonly rawText: string;
}

export function createNumericLiteral(
  text: number,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumericLiteral {
  return {
    kind: NodeKind.NumericLiteral,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
