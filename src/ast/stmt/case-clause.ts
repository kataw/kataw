import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Default and case clause statement.
 */

export interface CaseClause extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly statements: readonly StatementNode[];
}

export function createCaseClause(
  expression: ExpressionNode,
  statements: readonly StatementNode[],
  start: number,
  end: number
): CaseClause {
  return {
    kind: SyntaxKind.CaseClause,
    expression,
    statements,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
