import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

export interface MemberAccessExpression extends SyntaxNode {
  kind: SyntaxKind.MemberAccessExpression;
  member: ExpressionNode;
  expression: ExpressionNode;
}

export function createMemberAccessExpression(
  member: ExpressionNode,
  expression: ExpressionNode,
  start: number,
  end: number
): MemberAccessExpression {
  return {
    kind: SyntaxKind.MemberAccessExpression,
    member,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
