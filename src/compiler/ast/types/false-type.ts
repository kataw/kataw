import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * FalseType
 */

export interface FalseType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createFalseType(value: string, rawValue: string, start: number, end: number): FalseType {
  return {
    kind: NodeKind.FalseType,
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
