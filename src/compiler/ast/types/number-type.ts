import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NumberType
 */

export interface NumberType extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createNumberType(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumberType {
  return {
    kind: NodeKind.NumberType,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
