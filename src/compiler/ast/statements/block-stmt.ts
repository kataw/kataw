import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Block } from './block';

/**
 * Block statement. A list of statements.
 */
export interface BlockStatement extends Node {
  readonly block: Block;
}

export function createBlockStatement(block: Block, flags: NodeFlags, start: number, end: number): BlockStatement {
  return {
    kind: NodeKind.BlockStatement,
    block,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBlockStatement(node: BlockStatement, block: Block): BlockStatement {
  return node.block !== block ? updateNode(createBlockStatement(block, node.flags, node.start, node.end), node) : node;
}
