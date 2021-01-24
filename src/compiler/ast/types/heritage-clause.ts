import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
/**
 * HeritageClause
 */

export interface HeritageClause extends Node {
  readonly type: TypeNode;
}

export function createHeritageClause(type: TypeNode, flags: NodeFlags, start: number, end: number): HeritageClause {
  return {
    kind: NodeKind.HeritageClause,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateHeritageClause(node: HeritageClause, type: TypeNode): HeritageClause {
  return node.type !== type ? updateNode(createHeritageClause(type, node.flags, node.start, node.end), node) : node;
}
