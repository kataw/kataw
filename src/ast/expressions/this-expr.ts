import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface ThisExpression extends SyntaxNode {
  kind: SyntaxKind.ThisExpression;
}

export function createThisExpression(start: number, end: number): ThisExpression {
  return {
    kind: SyntaxKind.ThisExpression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
