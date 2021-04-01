import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '../expressions/index';

/**
 * Return statement.
 */
export interface ReturnStatement extends SyntaxNode {
  readonly expression: ExpressionNode | null;
}

export function createReturnStatement(expression: ExpressionNode | null, start: number, end: number): ReturnStatement {
  return {
    kind: SyntaxKind.ReturnStatement,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
