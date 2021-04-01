import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

export interface ExpressionStatement extends SyntaxNode {
  kind: SyntaxKind.ExpressionStatement;
  expression: any;
}

export function createExpressionStatement(expression: any, start: number, end: number): ExpressionStatement {
  return {
    kind: SyntaxKind.ExpressionStatement,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
