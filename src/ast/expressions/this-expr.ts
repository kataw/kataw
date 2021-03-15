import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * This expression.
 */
export type ThisExpression = Node;

export function createThisExpression(flags: NodeFlags, start: number, end: number): ThisExpression {
  return {
    kind: NodeKind.ThisExpression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
