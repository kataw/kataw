import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';

/**
 * An array type node.
 */

export interface ArrayType extends Node {
  readonly elementType: TypeNode;
}

export function createArrayType(elementType: TypeNode, flags: NodeFlags, start: number, end: number): ArrayType {
  return {
    kind: NodeKind.ArrayType,
    elementType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateArrayType(node: ArrayType, elementType: TypeNode): ArrayType {
  return node.elementType !== elementType
    ? updateNode(createArrayType(elementType, node.flags, node.start, node.end), node)
    : node;
}
