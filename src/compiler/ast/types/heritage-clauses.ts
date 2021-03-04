import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { HeritageClause } from './heritage-clause';

/**
 * Heritage clauses list
 */

export interface HeritageClauses extends Node {
  readonly clauses: readonly HeritageClause[];
}

export function createHeritageClauses(
  clauses: readonly HeritageClause[],
  flags: NodeFlags,
  start: number,
  end: number
): HeritageClauses {
  return {
    kind: NodeKind.HeritageClauses,
    clauses,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateHeritageClauses(node: HeritageClauses, clauses: readonly HeritageClause[]): HeritageClauses {
  return node.clauses !== clauses
    ? updateNode(createHeritageClauses(clauses, node.flags, node.start, node.end), node)
    : node;
}
