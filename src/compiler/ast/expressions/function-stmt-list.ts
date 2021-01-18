import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

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
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateFunctionStatementList(
  node: FunctionStatementList,
  statements: Statement[]
): FunctionStatementList {
  return node.statements !== statements
    ? updateNode(createFunctionStatementList(statements, node.multiline, node.flags, node.start, node.end), node)
    : node;
}
