import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

/**
 * An await expression.
 */
export interface AwaitExpression extends SyntaxNode {
  readonly awaitKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createAwaitExpression(
  awaitKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): AwaitExpression {
  return {
    kind: SyntaxKind.AwaitExpression,
    awaitKeyword,
    expression,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.ArrowFolding,
    start,
    end
  };
}
