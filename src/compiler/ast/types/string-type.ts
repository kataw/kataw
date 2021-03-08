import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * StringType
 */

export interface StringType extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createStringType(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringType {
  return {
    kind: NodeKind.StringType,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
