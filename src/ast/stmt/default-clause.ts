import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';

/**
 * Default and case clause statement.
 */

export interface DefaultClause extends SyntaxNode {
  readonly statements: readonly StatementNode[];
}
export function createDefaultClause(statements: readonly StatementNode[], start: number, end: number): DefaultClause {
  return {
    kind: SyntaxKind.DefaultClause,
    statements,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
