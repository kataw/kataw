import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';

/**
 * TupleType
 */

export interface TupleType extends Node {
  readonly elementTypes: TypeNode[];
}

export function createTupleType(elementTypes: TypeNode[], start: number, end: number): TupleType {
  return {
    kind: NodeKind.TupleType,
    elementTypes,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
