import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * TrueType
 */

export interface TrueType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createTrueType(value: string, rawValue: string, start: number, end: number): TrueType {
  return {
    kind: NodeKind.TrueType,
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
