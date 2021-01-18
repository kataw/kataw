import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

import { Binding } from '../expressions';
import { BlockStatement } from './block-stmt';
import { updateNode } from '../../../visitor/common';

/**
 * CatchClause.
 */
export interface CatchClause extends Node {
  readonly catchParameter: Binding | null;
  readonly block: BlockStatement;
}

export function createCatch(
  catchParameter: Binding | null,
  block: BlockStatement,
  flags: NodeFlags,
  start: number,
  end: number
): CatchClause {
  return {
    kind: NodeKind.Catch,
    catchParameter,
    block,
    flags,
    intersects: false,
    transformFlags: catchParameter ? TransformFlags.None : TransformFlags.ES2019,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCatch(node: CatchClause, catchParameter: Binding | null, block: BlockStatement): CatchClause {
  return node.catchParameter !== catchParameter || node.block !== block
    ? updateNode(createCatch(catchParameter, block, node.flags, node.start, node.end), node)
    : node;
}
