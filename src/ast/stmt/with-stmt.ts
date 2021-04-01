import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { BlockStatement } from './block-stmt';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * With statements
 */
export interface WithStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly statement: StatementNode | BlockStatement;
}

export function createWithStatement(
  expression: ExpressionNode,
  statement: StatementNode | BlockStatement,
  start: number,
  end: number
): WithStatement {
  return {
    kind: SyntaxKind.WithStatement,
    expression,
    statement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
