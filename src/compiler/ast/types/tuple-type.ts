import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';

/**
 * TupleType
 */

export interface TupleType extends Node {
  readonly elementTypes: TypeNode[];
}

export function createTupleType(elementTypes: TypeNode[], flags: NodeFlags, start: number, end: number): TupleType {
  return {
    kind: NodeKind.TupleType,
    elementTypes,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTupleType(node: TupleType, elementTypes: TypeNode[]): TupleType {
  return node.elementTypes !== elementTypes
    ? updateNode(createTupleType(elementTypes, node.flags, node.start, node.end), node)
    : node;
}
