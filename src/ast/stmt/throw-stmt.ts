import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '../expressions/index';

/**
 * Throw statement.
 */
export interface ThrowStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createThrowStatement(expression: ExpressionNode, start: number, end: number): ThrowStatement {
  return {
    kind: SyntaxKind.ThrowStatement,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
