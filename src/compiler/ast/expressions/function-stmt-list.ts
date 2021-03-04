import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '../statements';

export interface FunctionStatementList extends Node {
  readonly statements: Statement[];
  readonly multiline: boolean;
}

export function createFunctionStatementList(
  statements: Statement[],
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionStatementList {
  return {
    kind: NodeKind.FunctionStatementList,
    statements,
    multiline,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateFunctionStatementList(
  node: FunctionStatementList,
  statements: Statement[],
  multiline: boolean
): FunctionStatementList {
  return node.statements !== statements || node.multiline !== multiline
    ? updateNode(createFunctionStatementList(statements, multiline, node.flags, node.start, node.end), node)
    : node;
}
