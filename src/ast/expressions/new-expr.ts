import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from './';
import { ArgumentList } from './argument-list';

/**
 * New expression.
 */
export interface NewExpression extends SyntaxNode {
  readonly newKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly argumentList: ArgumentList | null;
}

export function createNewExpression(
  newKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  argumentList: ArgumentList | null,
  start: number,
  end: number
): NewExpression {
  return {
    kind: SyntaxKind.NewExpression,
    newKeyword,
    expression,
    argumentList,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
