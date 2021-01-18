import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * OmittedExpression
 */

export type OmittedExpression = Node;

export function createOmittedExpression(flags: NodeFlags, start: number, end: number): OmittedExpression {
  return {
    kind: NodeKind.OmittedExpression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
