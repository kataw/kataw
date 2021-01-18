import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';

/**
 * TypeOperator
 */

export type TypeOperators = 'keyof' | 'unique' | 'readonly';

export interface TypeOperator extends Node {
  readonly operator: TypeOperators;
  readonly type: TypeNode | null;
}

export function createTypeOperator(
  operator: TypeOperators,
  type: TypeNode | null,
  start: number,
  end: number
): TypeOperator {
  return {
    kind: NodeKind.TypeOperator,
    operator,
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
