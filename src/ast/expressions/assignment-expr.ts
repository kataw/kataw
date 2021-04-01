import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

export interface AssignmentExpression extends SyntaxNode {
  kind: SyntaxKind.AssignmentExpression;
  operatorToken: SyntaxToken<TokenSyntaxKind>;
  left: ExpressionNode;
  right: ExpressionNode;
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
