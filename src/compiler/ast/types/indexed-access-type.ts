import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): IndexedAccessType {
  return {
    kind: NodeKind.IndexedAccessType,
    objectType,
    indexType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateIndexedAccessType(
  node: IndexedAccessType,
  objectType: TypeNode,
  indexType: TypeNode
): IndexedAccessType {
  return node.objectType !== objectType || node.indexType !== indexType
    ? updateNode(createIndexedAccessType(objectType, indexType, node.flags, node.start, node.end), node)
    : node;
}
