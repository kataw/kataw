import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

export interface ForOfStatement extends SyntaxNode {
  readonly initializer: VariableDeclarationList | BindingList | ExpressionNode | null;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
  readonly awaitToken: SyntaxToken<TokenSyntaxKind> | null;
}

/**
 * For-of statement.
 */

export function createForOfStatement(
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  awaitToken: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ForOfStatement {
  return {
    kind: SyntaxKind.ForOfStatement,
    initializer,
    expression,
    statement,
    awaitToken,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
