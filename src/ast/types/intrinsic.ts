import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * IntrinsicKeyword
 */

export type IntrinsicKeyword = Node;

export function createIntrinsicKeyword(flags: NodeFlags, start: number, end: number): IntrinsicKeyword {
  return {
    kind: NodeKind.IntrinsicKeyword,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
