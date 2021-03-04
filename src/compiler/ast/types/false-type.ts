import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * FalseType
 */

export interface FalseType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createFalseType(
  value: string,
  rawValue: string,
  flags: NodeFlags,
  start: number,
  end: number
): FalseType {
  return {
    kind: NodeKind.FalseType,
    value,
    rawValue,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
