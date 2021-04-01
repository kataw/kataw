import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { BlockStatement } from './block-stmt';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * With statements
 */
export interface WhileStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly statement: StatementNode | BlockStatement;
}

export function createWhileStatement(
  expression: ExpressionNode,
  statement: StatementNode | BlockStatement,
  start: number,
  end: number
): WhileStatement {
  return {
    kind: SyntaxKind.WhileStatement,
    expression,
    statement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
