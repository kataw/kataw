import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * TrueType
 */

export interface TrueType extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createTrueType(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): TrueType {
  return {
    kind: NodeKind.TrueType,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
