import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
  readonly inKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
}

export function createForInStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  inKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): ForInStatement {
  return {
    kind: SyntaxKind.ForInStatement,
    forKeyword,
    initializer,
    inKeyword,
    expression,
    statement,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
