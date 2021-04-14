import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Block } from './block';
import { CatchClause } from './catch-stmt';

/**
 * Try statement.
 */
export interface TryStatement extends SyntaxNode {
  readonly tryKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly block: Block;
  readonly catchClause: CatchClause | null;
  readonly finallyKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly finallyBlock: Block | null;
}

export function createTryStatement(
  tryKeyword: SyntaxToken<TokenSyntaxKind>,
  block: Block,
  catchClause: CatchClause | null,
  finallyKeyword: SyntaxToken<TokenSyntaxKind> | null,
  finallyBlock: Block | null,
  start: number,
  end: number
): TryStatement {
  return {
    kind: SyntaxKind.TryStatement,
    tryKeyword,
    block,
    catchClause,
    finallyKeyword,
    finallyBlock,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
