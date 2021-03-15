import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ImplementClause } from './implement-clause';

/**
 * Implement clauses list
 */

export interface ImplementClauses extends Node {
  readonly clauses: readonly ImplementClause[];
}

export function createImplementClauses(
  clauses: readonly ImplementClause[],
  flags: NodeFlags,
  start: number,
  end: number
): ImplementClauses {
  return {
    kind: NodeKind.ImplementClauses,
    clauses,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateImplementClauses(node: ImplementClauses, clauses: readonly ImplementClause[]): ImplementClauses {
  return node.clauses !== clauses
    ? updateNode(createImplementClauses(clauses, node.flags, node.start, node.end), node)
    : node;
}
