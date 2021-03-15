import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

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
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateBlock(node: Block, statements: Statement[], multiline: boolean): Block {
  return node.multiline !== multiline || node.statements !== statements
    ? updateNode(createBlock(statements, multiline, node.flags, node.start, node.end), node)
    : node;
}
