import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * BigIntType
 */

export interface BigIntType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createBigIntType(value: string, rawValue: string, start: number, end: number): BigIntType {
  return {
    kind: NodeKind.BigIntType,
    value,
    rawValue,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
