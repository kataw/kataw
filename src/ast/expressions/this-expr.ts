import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export interface ThisExpression extends SyntaxNode {
  kind: SyntaxKind.ThisExpression;
}

export function createThisExpression(start: number, end: number): ThisExpression {
  return {
    kind: SyntaxKind.ThisExpression,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
