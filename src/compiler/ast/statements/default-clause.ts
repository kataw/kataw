import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { CaseBlock } from './case-block';

/**
 * Default and case clause statement.
 */

export interface DefaultClause extends Node {
  readonly statements: readonly Statement[];
}
export function createDefaultClause(
  statements: readonly Statement[],
  flags: NodeFlags,
  start: number,
  end: number
): DefaultClause {
  return {
    kind: NodeKind.DefaultClause,
    statements,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateDefaultClause(node: DefaultClause, statements: readonly Statement[]): DefaultClause {
  return node.statements !== statements
    ? updateNode(createDefaultClause(statements, node.flags, node.start, node.end), node)
    : node;
}
