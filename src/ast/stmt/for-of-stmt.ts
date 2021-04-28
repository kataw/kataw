import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

export interface ForOfStatement extends SyntaxNode {
  readonly forKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly initializer: VariableDeclarationList | BindingList | ExpressionNode | null;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
  readonly awaitKeyword: SyntaxToken<TokenSyntaxKind> | null;
}

/**
 * For-of statement.
 */

export function createForOfStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  awaitKeyword: SyntaxToken<TokenSyntaxKind> | null,
  start: number,
  end: number
): ForOfStatement {
  return {
    kind: SyntaxKind.ForOfStatement,
    forKeyword,
    initializer,
    expression,
    statement,
    awaitKeyword,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
