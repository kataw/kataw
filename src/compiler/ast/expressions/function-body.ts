import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { FunctionStatementList } from './function-stmt-list';

export interface FunctionBody extends Node {
  readonly functionStatementList: FunctionStatementList;
}

export function createFunctionBody(
  functionStatementList: FunctionStatementList,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionBody {
  return {
    kind: NodeKind.FunctionBody,
    functionStatementList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateFunctionBody(node: FunctionBody, functionStatementList: FunctionStatementList): FunctionBody {
  return node.functionStatementList !== functionStatementList
    ? updateNode(createFunctionBody(functionStatementList, node.flags, node.start, node.end), node)
    : node;
}
