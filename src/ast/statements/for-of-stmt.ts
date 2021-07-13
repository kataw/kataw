import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { VariableDeclarationList } from './variable-declarationList';

export interface ForOfStatement extends SyntaxNode {
  readonly forKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly awaitKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly initializer: VariableDeclarationList | BindingList | ExpressionNode | null;
  readonly ofKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode;
}

/**
 * For-of statement.
 */

export function createForOfStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  ofKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: VariableDeclarationList | BindingList | ExpressionNode | null,
  expression: ExpressionNode,
  statement: StatementNode,
  awaitKeyword: SyntaxToken<TokenSyntaxKind> | null,
  flags: NodeFlags,
  start: number,
  end: number
): ForOfStatement {
  return {
    kind: SyntaxKind.ForOfStatement,
    forKeyword,
    awaitKeyword,
    initializer,
    ofKeyword,
    expression,
    statement,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
