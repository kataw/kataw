import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

export interface AssignmentExpression extends SyntaxNode {
  readonly operatorToken: SyntaxToken<TokenSyntaxKind>;
  readonly left: ExpressionNode;
  readonly right: ExpressionNode;
}

export function createAssignmentExpression(
  left: ExpressionNode,
  operatorToken: SyntaxToken<TokenSyntaxKind>,
  right: ExpressionNode,
  start: number,
  end: number
): AssignmentExpression {
  return {
    kind: SyntaxKind.AssignmentExpression,
    left,
    operatorToken,
    right,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
