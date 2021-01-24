import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * AnyKeyword
 */

export type AnyKeyword = Node;

export function createAnyKeyword(start: number, end: number): AnyKeyword {
  return {
    kind: NodeKind.AnyKeyword,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
