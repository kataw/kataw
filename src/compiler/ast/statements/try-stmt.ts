import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { BlockStatement } from './block-stmt';
import { CatchClause } from './catch-stmt';
/**
 * Try statement.
 */
export interface TryStatement extends Node {
  readonly block: BlockStatement;
  readonly catchClause: CatchClause | null;
  readonly finallyBlock: BlockStatement | null;
}

export function createTryStatement(
  block: BlockStatement,
  catchClause: CatchClause | null,
  finallyBlock: BlockStatement | null,
  flags: NodeFlags,
  start: number,
  end: number
): TryStatement {
  return {
    kind: NodeKind.TryStatement,
    block,
    catchClause,
    finallyBlock,
    flags,
    intersects: false,
    transformFlags:
      (block ? block.transformFlags : TransformFlags.None) |
      (catchClause ? catchClause.transformFlags : TransformFlags.None) |
      (finallyBlock ? finallyBlock.transformFlags : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTryStatement(
  node: TryStatement,
  block: BlockStatement,
  catchClause: CatchClause | null,
  finallyBlock: BlockStatement | null
): TryStatement {
  return node.block !== block || node.catchClause !== catchClause || node.finallyBlock !== finallyBlock
    ? updateNode(createTryStatement(block, catchClause, finallyBlock, node.flags, node.start, node.end), node)
    : node;
}
