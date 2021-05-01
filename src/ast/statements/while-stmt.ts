import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BlockStatement } from './block-stmt';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * With statements
 */
export interface WhileStatement extends SyntaxNode {
  readonly whileKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode | BlockStatement;
}

export function createWhileStatement(
  whileKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  statement: StatementNode | BlockStatement,
  start: number,
  end: number
): WhileStatement {
  return {
    kind: SyntaxKind.WhileStatement,
    whileKeyword,
    expression,
    statement,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
