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
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTypePredicate(
  node: TypePredicate,
  parameterName: IdentifierReference | ThisType,
  type: TypeNode | null
): TypePredicate {
  return node.parameterName !== parameterName || node.type !== type
    ? updateNode(createTypePredicate(node.asserts, parameterName, type, node.flags, node.start, node.end), node)
    : node;
}
