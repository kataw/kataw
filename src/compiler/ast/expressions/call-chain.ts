import { ElementAccessChain } from './element-access-chain';
import { PropertyAccessChain } from './property-access-chain';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ArgumentList } from './argument-list';
import { TypeArguments } from '../types/type-arguments';

/**
 * Call chain expression.
 */
export interface CallChain extends Node {
  readonly chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  readonly argumentList: ArgumentList | null;
  readonly typeArguments: TypeArguments;
}

export function createCallChain(
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null,
  typeArguments: TypeArguments,
  argumentList: ArgumentList,
  flags: NodeFlags,
  start: number,
  end: number
): CallChain {
  return {
    kind: NodeKind.CallChain,
    chain,
    typeArguments,
    argumentList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2020,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCallChain(
  node: CallChain,
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null,
  typeArguments: TypeArguments,
  argumentList: ArgumentList
): CallChain {
  return node.chain !== chain || node.typeArguments !== typeArguments || node.argumentList !== argumentList
    ? updateNode(createCallChain(chain, typeArguments, argumentList, node.flags, node.start, node.end), node)
    : node;
}
