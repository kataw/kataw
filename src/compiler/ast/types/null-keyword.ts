import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NullKeyword
 */

export interface NullKeyword extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createNullKeyword(value: string, rawValue: string, start: number, end: number): NullKeyword {
  return {
    kind: NodeKind.NullKeyword,
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
