import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * TrueType
 */

export interface TrueType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createTrueType(
  value: string,
  rawValue: string,
  flags: NodeFlags,
  start: number,
  end: number
): TrueType {
  return {
    kind: NodeKind.TrueType,
    value,
    rawValue,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
