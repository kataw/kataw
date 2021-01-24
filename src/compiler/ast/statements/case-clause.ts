import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { Statement } from '.';
import { Expression } from '../expressions';
import { CaseBlock } from './case-block';

/**
 * Default and case clause statement.
 */

export interface CaseClause extends Node {
  readonly expression: Expression;
  readonly statements: readonly Statement[];
  readonly parent: CaseBlock | null;
}

export function createCaseClause(
  expression: Expression,
  statements: readonly Statement[],
  flags: NodeFlags,
  start: number,
  end: number
): CaseClause {
  return {
    kind: NodeKind.CaseClause,
    expression,
    statements,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateCaseClause(
  node: CaseClause,
  expression: Expression,
  statements: readonly Statement[]
): CaseClause {
  return node.expression !== expression || node.statements !== statements
    ? updateNode(createCaseClause(expression, statements, node.flags, node.start, node.end), node)
    : node;
}
