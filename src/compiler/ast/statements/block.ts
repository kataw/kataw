import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Statement } from '.';

/**
 * Block statement. A list of statements.
 */
export interface Block extends Node {
  readonly statements: Statement[];
  /* @internal */
  readonly multiline: boolean;
}

export function createBlock(
  statements: Statement[],
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): Block {
  return {
    kind: NodeKind.Block,
    statements,
    multiline,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBlock(node: Block, statements: Statement[]): Block {
  return node.statements !== statements
    ? updateNode(createBlock(statements, node.multiline, node.flags, node.start, node.end), node)
    : node;
}
