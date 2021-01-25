import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * IntrinsicKeyword
 */

export interface IntrinsicKeyword extends Node {}

export function createIntrinsicKeyword(flags: NodeFlags, start: number, end: number): IntrinsicKeyword {
  return {
    kind: NodeKind.IntrinsicKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
