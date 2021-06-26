import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

export interface IndexExpression extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly expression: ExpressionNode;
}

export function createIndexExpression(
  member: ExpressionNode,
  expression: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): IndexExpression {
  return {
    kind: SyntaxKind.IndexExpression,
    member,
    expression,
    flags,
    start,
    end
  };
}
