import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';

/**
 * An if statement with an optional else branch.
 */
export interface IfStatement extends SyntaxNode {
  readonly expression: ExpressionNode;
  readonly consequent: StatementNode;
  readonly alternate: StatementNode | null;
}

export function createIfStatement(
  expression: ExpressionNode,
  consequent: StatementNode,
  alternate: StatementNode | null,
  start: number,
  end: number
): IfStatement {
  return {
    kind: SyntaxKind.IfStatement,
    expression,
    consequent,
    alternate,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
