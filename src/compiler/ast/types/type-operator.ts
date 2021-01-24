import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): TypeOperator {
  return {
    kind: NodeKind.TypeOperator,
    operator,
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

export function updateTypeOperator(node: TypeOperator, type: TypeNode | null): TypeOperator {
  return node.type !== type
    ? updateNode(createTypeOperator(node.operator, type, node.flags, node.start, node.end), node)
    : node;
}
