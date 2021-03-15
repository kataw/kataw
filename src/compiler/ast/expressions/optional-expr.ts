import { OptionalChain } from './optional-chain';
import { Expression } from '.';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * Optional expression.
 */
export interface OptionalExpression extends Node {
  readonly member: Expression;
  readonly chain: OptionalChain;
}

export function createOptionalExpression(
  member: Expression,
  chain: OptionalChain,
  flags: NodeFlags,
  start: number,
  end: number
): OptionalExpression {
  return {
    kind: NodeKind.OptionalExpression,
    member,
    chain,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateOptionalExpression(
  node: OptionalExpression,
  member: Expression,
  chain: OptionalChain
): OptionalExpression {
  return node.member !== member || node.chain !== chain
    ? updateNode(createOptionalExpression(member, chain, node.flags, node.start, node.end), node)
    : node;
}
