import { CallChain } from './call-chain';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { PrivateIdentifier } from './private-identifier';
import { IdentifierName } from './identifier-name';
import { ElementAccessChain } from './element-access-chain';

/**
 * PropertyAccessChain expression.
 */
export interface PropertyAccessChain extends Node {
  readonly chain: ElementAccessChain | PropertyAccessChain | CallChain | null;
  readonly expression: IdentifierName | PrivateIdentifier;
}

export function createPropertyAccessChain(
  chain: ElementAccessChain | PropertyAccessChain | CallChain | null,
  expression: IdentifierName | PrivateIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): PropertyAccessChain {
  return {
    kind: NodeKind.PropertyAccessChain,
    chain,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2020,
    start,
    end
  };
}

export function updatePropertyAccessChain(
  node: PropertyAccessChain,
  chain: PropertyAccessChain | ElementAccessChain | CallChain | null,
  expression: IdentifierName | PrivateIdentifier
): PropertyAccessChain {
  return node.chain !== chain || node.expression !== expression
    ? updateNode(createPropertyAccessChain(chain, expression, node.flags, node.start, node.end), node)
    : node;
}
