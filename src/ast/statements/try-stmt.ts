import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BlockStatement } from './block-stmt';
import { CatchClause } from './catch-stmt';

/**
 * Try statement
 */
export interface TryStatement extends SyntaxNode {
  readonly tryKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly block: BlockStatement;
  readonly catchClause: CatchClause | null;
  readonly finallyKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly finallyBlock: BlockStatement | null;
}

export function createTryStatement(
  tryKeyword: SyntaxToken<TokenSyntaxKind>,
  block: BlockStatement,
  catchClause: CatchClause | null,
  finallyKeyword: SyntaxToken<TokenSyntaxKind> | null,
  finallyBlock: BlockStatement | null,
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
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
