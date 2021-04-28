import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Default and case clause statement.
 */

export interface CaseClause extends SyntaxNode {
  readonly caseKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statements: readonly StatementNode[];
}

export function createCaseClause(
  caseKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  statements: readonly StatementNode[],
  start: number,
  end: number
): CaseClause {
  return {
    kind: SyntaxKind.CaseClause,
    caseKeyword,
    expression,
    statements,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
