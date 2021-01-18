import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * ThisType
 */

export type ThisType = Node;

export function createThisType(start: number, end: number): ThisType {
  return {
    kind: NodeKind.ThisType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
