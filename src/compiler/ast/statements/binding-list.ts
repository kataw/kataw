import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { LexicalBinding } from './lexical-binding';

/**
 * Binding list
 */

export interface BindingList extends Node {
  readonly bindingList: LexicalBinding[];
}

export function createBindingList(
  bindingList: LexicalBinding[],
  flags: NodeFlags,
  start: number,
  end: number
): BindingList {
  return {
    kind: NodeKind.BindingList,
    bindingList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBindingList(node: BindingList, bindingList: LexicalBinding[]): BindingList {
  return node.bindingList !== bindingList
    ? updateNode(createBindingList(bindingList, node.flags, node.start, node.end), node)
    : node;
}
