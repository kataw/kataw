import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { CaseClause } from './case-clause';
import { DefaultClause } from './default-clause';

/**
 * Clauses
 */

export type CaseOrDefaultClause = CaseClause | DefaultClause;

export interface Clauses extends SyntaxNode {
  readonly clauses: CaseOrDefaultClause[];
}

export function createClauses(clauses: CaseOrDefaultClause[], start: number, end: number): Clauses {
  return {
    kind: SyntaxKind.Clauses,
    clauses,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
