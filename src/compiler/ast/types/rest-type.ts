import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';

/**
 * RestType
 */

export interface RestType extends Node {
  readonly type: TypeNode;
}

export function createRestType(type: TypeNode, start: number, end: number): RestType {
  return {
    kind: NodeKind.RestType,
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
