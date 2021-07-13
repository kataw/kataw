import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';

/**
 * An if statement with an optional else branch.
 */
export interface IfStatement extends SyntaxNode {
  readonly ifKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly consequent: StatementNode;
  readonly elseKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly alternate: StatementNode | null;
}

export function createIfStatement(
  ifKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  consequent: StatementNode,
  elseKeyword: SyntaxToken<TokenSyntaxKind> | null,
  alternate: StatementNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): IfStatement {
  return {
    kind: SyntaxKind.IfStatement,
    ifKeyword,
    expression,
    consequent,
    elseKeyword,
    alternate,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
