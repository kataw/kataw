import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { VariableDeclaration } from './variable-declaration';

import { updateNode } from '../../utils';

/**
 * VariableDeclarationList
 */

export interface VariableDeclarationList extends Node {
  readonly declarations: VariableDeclaration[];
}

export function createVariableDeclarationList(
  declarations: VariableDeclaration[],
  flags: NodeFlags,
  start: number,
  end: number
): VariableDeclarationList {
  return {
    kind: NodeKind.VariableDeclarationList,
    declarations,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateVariableDeclarationList(
  node: VariableDeclarationList,
  declarations: VariableDeclaration[]
): VariableDeclarationList {
  return node.declarations !== declarations
    ? updateNode(createVariableDeclarationList(declarations, node.flags, node.start, node.end), node)
    : node;
}
