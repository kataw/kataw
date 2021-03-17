import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { LexicalBinding } from './lexical-binding';

/**
 * Binding list
 */

export interface BindingList extends Node {
  readonly lexicals: LexicalBinding[];
}

export function createBindingList(
  lexicals: LexicalBinding[],
  flags: NodeFlags,
  start: number,
  end: number
): BindingList {
  return {
    kind: NodeKind.BindingList,
    lexicals,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateBindingList(node: BindingList, lexicals: LexicalBinding[]): BindingList {
  return node.lexicals !== lexicals
    ? updateNode(createBindingList(lexicals, node.flags, node.start, node.end), node)
    : node;
}
