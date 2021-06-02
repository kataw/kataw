import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

export interface MemberAccessExpression extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly expression: ExpressionNode;
}

export function createMemberAccessExpression(
  member: ExpressionNode,
  expression: ExpressionNode,
  start: number,
  end: number
): MemberAccessExpression {
  return {
    kind: SyntaxKind.MemberAccessExpression | NodeFlags.IsMemberExpression,
    member,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
