import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * IntersectionType
 */

export interface IntersectionType extends Node {
  readonly types: readonly TypeNode[];
}

export function createIntersectionType(types: readonly TypeNode[], start: number, end: number): IntersectionType {
  return {
    kind: NodeKind.IntersectionList,
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
