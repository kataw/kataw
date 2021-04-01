import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Represents a `for` statement
 */
export interface ForStatement extends SyntaxNode {
  readonly initializer: ExpressionNode | VariableDeclarationList | BindingList | null;
  readonly condition: ExpressionNode | null;
  readonly incrementor: ExpressionNode | null;
  readonly statement: StatementNode;
}

export function createForStatement(
  initializer: ExpressionNode | VariableDeclarationList | BindingList | null,
  condition: ExpressionNode | null,
  incrementor: ExpressionNode | null,
  statement: StatementNode,
  start: number,
  end: number
): ForStatement {
  return {
    kind: SyntaxKind.ForStatement,
    initializer,
    condition,
    incrementor,
    statement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
