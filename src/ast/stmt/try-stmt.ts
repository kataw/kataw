import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Block } from './block';
import { CatchClause } from './catch-stmt';

/**
 * Try statement.
 */
export interface TryStatement extends SyntaxNode {
  readonly block: Block;
  readonly catchClause: CatchClause | null;
  readonly finallyBlock: Block | null;
}

export function createTryStatement(
  block: Block,
  catchClause: CatchClause | null,
  finallyBlock: Block | null,
  start: number,
  end: number
): TryStatement {
  return {
    kind: SyntaxKind.TryStatement,
    block,
    catchClause,
    finallyBlock,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
