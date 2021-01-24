import { Expression } from '.';
import { IdentifierName } from './identifier-name';
import { CallChain } from './call-chain';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { PropertyAccessChain } from './property-access-chain';

/**
 * Member chain expression.
 */
export interface ElementAccessChain extends Node {
  readonly chain: PropertyAccessChain | ElementAccessChain | CallChain | null;
  readonly expression: Expression | IdentifierName | null;
}

export function createElementAccessChain(
  chain: PropertyAccessChain | ElementAccessChain | CallChain | null,
  expression: Expression | IdentifierName | null,
  flags: NodeFlags,
  start: number,
  end: number
): ElementAccessChain {
  return {
    kind: NodeKind.ElementAccessChain,
    chain,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2020,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateElementAccessChain(
  node: ElementAccessChain,
  chain: PropertyAccessChain | ElementAccessChain | CallChain | null,
  expression: Expression | IdentifierName | null
): ElementAccessChain {
  return node.chain !== chain || node.expression !== expression
    ? updateNode(createElementAccessChain(chain, expression, node.flags, node.start, node.end), node)
    : node;
}
