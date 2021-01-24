import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * UndefinedKeyword
 */

export type UndefinedKeyword = Node;

export function createUndefinedKeyword(flags: NodeFlags, start: number, end: number): UndefinedKeyword {
  return {
    kind: NodeKind.UndefinedKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
