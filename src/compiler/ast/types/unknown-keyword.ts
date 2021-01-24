import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * UnknownKeyword
 */

export type UnknownKeyword = Node;

export function createUnknownKeyword(flags: NodeFlags, start: number, end: number): UnknownKeyword {
  return {
    kind: NodeKind.UnknownKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
