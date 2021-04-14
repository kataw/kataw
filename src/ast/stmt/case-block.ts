import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { CaseClause } from './case-clause';
import { DefaultClause } from './default-clause';

/**
 * CaseBlock
 */

export type CaseOrDefaultClause = CaseClause | DefaultClause;

export interface CaseBlock extends SyntaxNode {
  readonly clauses: CaseOrDefaultClause[];
}

export function createCaseBlock(clauses: CaseOrDefaultClause[], start: number, end: number): CaseBlock {
  return {
    kind: SyntaxKind.CaseBlock,
    clauses,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
