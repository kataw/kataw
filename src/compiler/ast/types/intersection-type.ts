import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';

/**
 * IntersectionType
 */

export interface IntersectionType extends Node {
  readonly types: readonly TypeNode[];
}

export function createIntersectionType(
  types: readonly TypeNode[],
  flags: NodeFlags,
  start: number,
  end: number
): IntersectionType {
  return {
    kind: NodeKind.IntersectionType,
    types,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateIntersectionType(node: IntersectionType, types: readonly TypeNode[]): IntersectionType {
  return node.types !== types
    ? updateNode(createIntersectionType(types, node.flags, node.start, node.end), node)
    : node;
}
