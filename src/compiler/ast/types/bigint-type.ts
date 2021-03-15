import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * BigIntType
 */

export interface BigIntType extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createBigIntType(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): BigIntType {
  return {
    kind: NodeKind.BigIntType,
    text,
    rawText,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
