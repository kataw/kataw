import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
/**
 * HeritageClause
 */

export interface HeritageClause extends Node {
  readonly type: TypeNode;
}

export function createHeritageClause(type: TypeNode, start: number, end: number): HeritageClause {
  return {
    kind: NodeKind.HeritageClause,
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
