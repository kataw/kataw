import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

/**
 * Yield expression.
 */
export interface YieldExpression extends SyntaxNode {
  readonly delegate: boolean;
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly expression: ExpressionNode | null;
}

export function createYieldExpression(
  delegate: boolean,
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null,
  expression: ExpressionNode | null,
  start: number,
  end: number
): YieldExpression {
  return {
    kind: SyntaxKind.YieldExpression,
    delegate,
    asteriskToken,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
