import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { BindingElementList } from './binding-element-list';

/**
 * Array binding pattern
 */
export interface ArrayBindingPattern extends Node {
  readonly bindingElementList: BindingElementList;
}

export function createArrayBindingPattern(
  bindingElementList: BindingElementList,
  flags: NodeFlags,
  start: number,
  end: number
): ArrayBindingPattern {
  return {
    kind: NodeKind.ArrayBindingPattern,
    bindingElementList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateArrayBindingPattern(
  node: ArrayBindingPattern,
  bindingElementList: BindingElementList
): ArrayBindingPattern {
  return node.bindingElementList !== bindingElementList
    ? updateNode(createArrayBindingPattern(bindingElementList, node.flags, node.start, node.end), node)
    : node;
}
