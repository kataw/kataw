import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * UnionType
 */

export interface UnionType extends Node {
  readonly types: readonly TypeNode[];
}

export function createUnionType(types: readonly TypeNode[], start: number, end: number): UnionType {
  return {
    kind: NodeKind.UnionType,
    types,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
