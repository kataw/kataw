import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { CaseClause } from './case-clause';
import { DefaultClause } from './default-clause';
import { SwitchStatement } from './switch-stmt';

/**
 * CaseBlock
 */

export type CaseOrDefaultClause = CaseClause | DefaultClause;

export interface CaseBlock extends Node {
  readonly clauses: CaseOrDefaultClause[];
  readonly parent: SwitchStatement | null;
}

export function createCaseBlock(
  clauses: CaseOrDefaultClause[],
  flags: NodeFlags,
  start: number,
  end: number
): CaseBlock {
  return {
    kind: NodeKind.CaseBlock,
    clauses,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCaseBlock(node: CaseBlock, clauses: CaseOrDefaultClause[]): CaseBlock {
  return node.clauses !== clauses ? updateNode(createCaseBlock(clauses, node.flags, node.start, node.end), node) : node;
}
