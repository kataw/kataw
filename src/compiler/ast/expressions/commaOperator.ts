import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { Expression } from '.';

/**
 * A list of comma-separated expressions.
 */
export interface CommaOperator extends Node {
  readonly expressions: Expression[];
}

export function createCommaOperator(
  expressions: Expression[],
  flags: NodeFlags,
  start: number,
  end: number
): CommaOperator {
  return {
    kind: NodeKind.CommaOperator,
    expressions,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateCommaOperator(node: CommaOperator, expressions: Expression[]): CommaOperator {
  return node.expressions !== expressions
    ? updateNode(createCommaOperator(expressions, node.flags, node.start, node.end), node)
    : node;
}
