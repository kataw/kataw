import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Do-while statement.
 */
export interface DoWhileStatement extends SyntaxNode {
  readonly doKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly whileKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly statement: StatementNode;
}

export function createDoWhileStatement(
  doKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  whileKeyword: SyntaxToken<TokenSyntaxKind>,
  statement: StatementNode,
  start: number,
  end: number
): DoWhileStatement {
  return {
    kind: SyntaxKind.DoWhileStatement,
    doKeyword,
    expression,
    whileKeyword,
    statement,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
