import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { ThisType } from './this-type';
import { TypeNode } from './';

/**
 * TypePredicate
 */

export interface TypePredicate extends Node {
  readonly asserts: boolean;
  readonly parameterName: IdentifierReference | ThisType;
  readonly type: TypeNode | null;
}

export function createTypePredicate(
  asserts: boolean,
  parameterName: IdentifierReference | ThisType,
  type: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): TypePredicate {
  return {
    kind: NodeKind.TypePredicate,
    asserts,
    parameterName,
    type,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypePredicate(
  node: TypePredicate,
  asserts: boolean,
  parameterName: IdentifierReference | ThisType,
  type: TypeNode | null
): TypePredicate {
  return node.asserts !== asserts || node.parameterName !== parameterName || node.type !== type
    ? updateNode(createTypePredicate(asserts, parameterName, type, node.flags, node.start, node.end), node)
    : node;
}
