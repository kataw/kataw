import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Default and case clause statement.
 */

export interface CaseClause extends SyntaxNode {
  readonly caseKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly colonToken: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statements: readonly StatementNode[];
}

export function createCaseClause(
  caseKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  colonToken: SyntaxToken<TokenSyntaxKind>,
  statements: readonly StatementNode[],
  start: number,
  end: number
): CaseClause {
  return {
    kind: SyntaxKind.CaseClause,
    caseKeyword,
    expression,
    colonToken,
    statements,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
