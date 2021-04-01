import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * For-in statement.
 */
export interface ForInStatement extends SyntaxNode {
  readonly initializer: VariableDeclarationList | BindingList | ExpressionNode | null;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
}

export function createForInStatement(
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  start: number,
  end: number
): ForInStatement {
  return {
    kind: SyntaxKind.ForInStatement,
    initializer,
    expression,
    statement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
