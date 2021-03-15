import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';

/**
 * UnionType
 */

export interface UnionType extends Node {
  readonly types: readonly TypeNode[];
}

export function createUnionType(types: readonly TypeNode[], flags: NodeFlags, start: number, end: number): UnionType {
  return {
    kind: NodeKind.UnionType,
    types,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,

    start,
    end
  };
}

export function updateUnionType(node: UnionType, types: readonly TypeNode[]): UnionType {
  return node.types !== types ? updateNode(createUnionType(types, node.flags, node.start, node.end), node) : node;
}
