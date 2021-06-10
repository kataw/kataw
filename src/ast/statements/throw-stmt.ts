import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions/index';

/**
 * Throw statement.
 */
export interface ThrowStatement extends SyntaxNode {
  readonly throwKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createThrowStatement(
  throwKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): ThrowStatement {
  return {
    kind: SyntaxKind.ThrowStatement,
    throwKeyword,
    expression,
    flags,
    start,
    end
  };
}
