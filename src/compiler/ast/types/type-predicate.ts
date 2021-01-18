import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
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
  start: number,
  end: number
): TypePredicate {
  return {
    kind: NodeKind.TypePredicate,
    asserts,
    parameterName,
    type,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
