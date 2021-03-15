import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * ThisType
 */

export type ThisType = Node;

export function createThisType(flags: NodeFlags, start: number, end: number): ThisType {
  return {
    kind: NodeKind.ThisType,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}
