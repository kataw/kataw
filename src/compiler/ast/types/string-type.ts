import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * StringType
 */

export interface StringType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createStringType(
  value: string,
  rawValue: string,
  flags: NodeFlags,
  start: number,
  end: number
): StringType {
  return {
    kind: NodeKind.StringType,
    value,
    rawValue,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
