import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * UndefinedKeyword
 */

export type VoidKeyword = Node;

export function createVoidKeyword(flags: NodeFlags, start: number, end: number): VoidKeyword {
  return {
    kind: NodeKind.VoidKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
