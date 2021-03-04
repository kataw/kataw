import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * BigIntType
 */

export interface BigIntType extends Node {
  readonly value: string;
  readonly rawValue: string;
}

export function createBigIntType(
  value: string,
  rawValue: string,
  flags: NodeFlags,
  start: number,
  end: number
): BigIntType {
  return {
    kind: NodeKind.BigIntType,
    value,
    rawValue,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
