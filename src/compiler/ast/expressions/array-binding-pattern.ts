import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { BindingElementList } from './binding-element-list';

/**
 * Array binding pattern
 */
export interface ArrayBindingPattern extends Node {
  readonly elementList: BindingElementList;
}

export function createArrayBindingPattern(
  elementList: BindingElementList,
  flags: NodeFlags,
  start: number,
  end: number
): ArrayBindingPattern {
  return {
    kind: NodeKind.ArrayBindingPattern,
    elementList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    start,
    end
  };
}

export function updateArrayBindingPattern(
  node: ArrayBindingPattern,
  elementList: BindingElementList
): ArrayBindingPattern {
  return node.elementList !== elementList
    ? updateNode(createArrayBindingPattern(elementList, node.flags, node.start, node.end), node)
    : node;
}
