import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';

/**
 * An array type node.
 */

export interface ArrayType extends Node {
  readonly elementType: TypeNode;
}

export function createArrayType(elementType: TypeNode, start: number, end: number): ArrayType {
  return {
    kind: NodeKind.ArrayType,
    elementType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
