import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

/**
 * Represents a `for` statement
 */
export interface ForStatement extends SyntaxNode {
  readonly forKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly initializer: ExpressionNode | VariableDeclarationList | BindingList | null;
  readonly condition: ExpressionNode | null;
  readonly incrementor: ExpressionNode | null;
  readonly statement: StatementNode;
}

export function createForStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: ExpressionNode | VariableDeclarationList | BindingList | null,
  condition: ExpressionNode | null,
  incrementor: ExpressionNode | null,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): ForStatement {
  return {
    kind: SyntaxKind.ForStatement,
    forKeyword,
    initializer,
    condition,
    incrementor,
    statement,
    flags,
    start,
    end
  };
}
