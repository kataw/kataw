import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { HeritageClause } from './heritage-clause';

/**
 * Heritage clauses list
 */

export interface HeritageClauses extends Node {
  readonly clauses: readonly HeritageClause[];
}

export function createHeritageClauses(clauses: readonly HeritageClause[], start: number, end: number): HeritageClauses {
  return {
    kind: NodeKind.HeritageClauses,
    clauses,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
