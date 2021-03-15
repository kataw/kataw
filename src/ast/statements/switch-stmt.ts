import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { CaseBlock } from './case-block';
import { Expression } from '../expressions/index';

/**
 * Switch statements.
 */
export interface SwitchStatement extends Node {
  readonly expression: Expression;
  readonly caseBlock: CaseBlock;
}

export function createSwitchStatement(
  expression: Expression,
  caseBlock: CaseBlock,
  flags: NodeFlags,
  start: number,
  end: number
): SwitchStatement {
  return {
    kind: NodeKind.SwitchStatement,
    expression,
    caseBlock,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateSwitchStatement(
  node: SwitchStatement,
  expression: Expression,
  caseBlock: CaseBlock
): SwitchStatement {
  return node.expression !== expression || node.caseBlock !== caseBlock
    ? updateNode(createSwitchStatement(expression, caseBlock, node.flags, node.start, node.end), node)
    : node;
}
