import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions/index';

/**
 * Return statement.
 */
export interface ReturnStatement extends SyntaxNode {
  readonly returnKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode | null;
}

export function createReturnStatement(
  returnKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode | null,
  start: number,
  end: number
): ReturnStatement {
  return {
    kind: SyntaxKind.ReturnStatement,
    returnKeyword,
    expression,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
