import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

/**
 * Yield expression.
 */
export interface YieldExpression extends SyntaxNode {
  readonly yieldKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly delegate: boolean;
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly expression: ExpressionNode | null;
}

export function createYieldExpression(
  yieldKeyword: SyntaxToken<TokenSyntaxKind> | null,
  delegate: boolean,
  asteriskToken: SyntaxToken<TokenSyntaxKind> | null,
  expression: ExpressionNode | null,
  start: number,
  end: number
): YieldExpression {
  return {
    kind: SyntaxKind.YieldExpression,
    yieldKeyword,
    delegate,
    asteriskToken,
    expression,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.ArrowFolding,
    start,
    end
  };
}
