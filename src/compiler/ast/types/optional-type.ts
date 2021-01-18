import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * Optional type
 */

export interface OptionalType extends Node {
  readonly valueType: TypeNode;
}

export function createOptionalType(valueType: TypeNode, start: number, end: number): OptionalType {
  return {
    kind: NodeKind.OptionalType,
    valueType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
