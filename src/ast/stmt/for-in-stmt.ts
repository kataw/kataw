import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * For-in statement.
 */
export interface ForInStatement extends SyntaxNode {
  readonly forKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly initializer: VariableDeclarationList | BindingList | ExpressionNode | null;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
}

export function createForInStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): ForInStatement {
  return {
    forKeyword,
    kind: SyntaxKind.ForInStatement,
    initializer,
    expression,
    statement,
    flags,
    start,
    end
  };
}
