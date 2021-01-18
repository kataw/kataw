import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { CallChain } from './call-chain';
import { ElementAccessChain } from './element-access-chain';
import { PropertyAccessChain } from './property-access-chain';

/**
 * OptionalChain
 */

export interface OptionalChain extends Node {
  readonly chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
}

export function createOptionalChain(
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null,
  flags: NodeFlags,
  start: number,
  end: number
): OptionalChain {
  return {
    kind: NodeKind.OptionalChain,
    chain,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2020,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateOptionalChain(
  node: OptionalChain,
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null
): OptionalChain {
  return node.chain !== chain ? updateNode(createOptionalChain(chain, node.flags, node.start, node.end), node) : node;
}
