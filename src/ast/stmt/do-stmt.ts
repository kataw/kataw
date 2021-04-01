import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Do-while statement.
 */
export interface DoWhileStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
}

export function createDoWhileStatement(
  expression: ExpressionNode,
  statement: StatementNode,
  start: number,
  end: number
): DoWhileStatement {
  return {
    kind: SyntaxKind.DoWhileStatement,
    expression,
    statement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
