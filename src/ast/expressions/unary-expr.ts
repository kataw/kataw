import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';

export interface UnaryExpression extends SyntaxNode {
  readonly operandToken: SyntaxToken<TokenSyntaxKind>;
  readonly operand: ExpressionNode;
}

export function createUnaryExpression(
  operandToken: SyntaxToken<TokenSyntaxKind>,
  operand: ExpressionNode,
  start: number,
  end: number
): UnaryExpression {
  return {
    kind: SyntaxKind.UnaryExpression,
    operandToken,
    operand,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.CanBreak,
    start,
    end
  };
}
