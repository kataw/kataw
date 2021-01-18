import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { VariableDeclarationList } from '../declarations/variable-declarationList';

/**
 * Variable statement and variable declaration
 */
export interface VariableStatement extends Node {
  readonly declarationList: VariableDeclarationList;
  readonly isDeclared: boolean;
}

export function createVariableStatement(
  declarationList: VariableDeclarationList,
  isDeclared: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): VariableStatement {
  return {
    kind: NodeKind.VariableStatement,
    declarationList,
    isDeclared,
    flags,
    intersects: false,
    transformFlags: isDeclared ? TransformFlags.TypeScript : TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateVariableStatement(
  node: VariableStatement,
  declarationList: VariableDeclarationList
): VariableStatement {
  return node.declarationList !== declarationList
    ? updateNode(createVariableStatement(declarationList, node.isDeclared, node.flags, node.start, node.end), node)
    : node;
}
