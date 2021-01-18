import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * IndexedAccessType
 */

export interface IndexedAccessType extends Node {
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
}

export function createIndexedAccessType(
  objectType: TypeNode,
  indexType: TypeNode,
  start: number,
  end: number
): IndexedAccessType {
  return {
    kind: NodeKind.IndexedAccessType,
    objectType,
    indexType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
