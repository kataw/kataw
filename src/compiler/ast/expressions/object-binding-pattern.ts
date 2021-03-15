import { BindingPropertyList } from './binding-property-list';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

/**
 * Object binding pattern.
 */
export interface ObjectBindingPattern extends Node {
  readonly propertyList: BindingPropertyList;
}

export function createObjectBindingPattern(
  propertyList: BindingPropertyList,
  flags: NodeFlags | NodeFlags,
  start: number,
  end: number
): ObjectBindingPattern {
  return {
    kind: NodeKind.ObjectBindingPattern,
    propertyList,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    start,
    end
  };
}

export function updateObjectBindingPattern(
  node: ObjectBindingPattern,
  propertyList: BindingPropertyList
): ObjectBindingPattern {
  return node.propertyList !== propertyList
    ? updateNode(createObjectBindingPattern(propertyList, node.flags, node.start, node.end), node)
    : node;
}
