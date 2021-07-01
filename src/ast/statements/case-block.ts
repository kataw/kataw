import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Clauses } from './clauses';

/**
 * CaseBlock
 */

export interface CaseBlock extends SyntaxNode {
  clauses: Clauses;
}

export function createCaseBlock(clauses: Clauses, start: number, end: number): CaseBlock {
  return {
    kind: SyntaxKind.CaseBlock,
    clauses,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
