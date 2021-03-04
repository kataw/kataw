import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * StringLiteral
 */
export interface StringLiteral extends Node {
  readonly text: number;
  readonly rawText: string;
}

export function createStringLiteral(
  text: number,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringLiteral {
  return {
    kind: NodeKind.StringLiteral,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: flags & NodeFlags.ExtendedUnicodeEscape ? TransformFlags.ES2015 : TransformFlags.None,
    start,
    end
  };
}
