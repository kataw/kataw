import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { VariableDeclarationList } from '../statements/variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface VariableStatement extends Node {
  readonly declarationList: VariableDeclarationList;
}

export function createVariableStatement(
  declarationList: VariableDeclarationList,
  flags: NodeFlags,
  start: number,
  end: number
): VariableStatement {
  return {
    kind: NodeKind.VariableStatement,
    declarationList,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateVariableStatement(
  node: VariableStatement,
  declarationList: VariableDeclarationList
): VariableStatement {
  return node.declarationList !== declarationList
    ? updateNode(createVariableStatement(declarationList, node.flags, node.start, node.end), node)
    : node;
}
