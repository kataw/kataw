import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * NumberType
 */

export interface NumberType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createNumberType(
  value: string,
  rawValue: string,
  flags: NodeFlags,
  start: number,
  end: number
): NumberType {
  return {
    kind: NodeKind.NumberLiteral,
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
