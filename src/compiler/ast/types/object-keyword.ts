import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * ObjectKeyword
 */

export type ObjectKeyword = Node;

export function createObjectKeyword(flags: NodeFlags, start: number, end: number): ObjectKeyword {
  return {
    kind: NodeKind.ObjectKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
