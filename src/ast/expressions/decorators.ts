import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from './';

/**
 * Decorator
 */

export interface Decorator extends SyntaxNode {
  readonly decoratorToken: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createDecorator(
  decoratorToken: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): Decorator {
  return {
    kind: SyntaxKind.Decorator,
    decoratorToken,
    expression,
    flags,
    start,
    end
  };
}
