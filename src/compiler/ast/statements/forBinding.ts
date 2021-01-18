import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { VariableDeclarationList } from '../declarations/variable-declarationList';

/**
 * ForBinding
 */
export interface ForBinding extends Node {
  readonly declarationList: VariableDeclarationList;
}

export function createForBinding(
  declarationList: VariableDeclarationList,
  flags: NodeFlags,
  start: number,
  end: number
): ForBinding {
  return {
    kind: NodeKind.ForBinding,
    declarationList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateForBinding(node: ForBinding, declarationList: VariableDeclarationList): ForBinding {
  return node.declarationList !== declarationList
    ? updateNode(createForBinding(declarationList, node.flags, node.start, node.end), node)
    : node;
}
