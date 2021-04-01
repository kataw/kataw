import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

export interface IndexExpression extends SyntaxNode {
  kind: SyntaxKind.IndexExpression;
  member: ExpressionNode;
  expression: ExpressionNode;
}

export function createIndexExpression(
  member: ExpressionNode,
  expression: ExpressionNode,
  start: number,
  end: number
): IndexExpression {
  return {
    kind: SyntaxKind.IndexExpression,
    member,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
