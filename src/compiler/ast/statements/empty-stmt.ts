import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * Empty statement.
 */
export type EmptyStatement = Node;

export function createEmptyStatement(flags: NodeFlags, start: number, end: number): EmptyStatement {
  return {
    kind: NodeKind.EmptyStatement,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
