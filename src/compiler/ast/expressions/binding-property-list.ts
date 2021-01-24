import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { BindingProperty } from './binding-property';
import { BindingElement } from './binding-element';

/**
 * BindingPropertyList
 */

export type BindingProperties = BindingElement | BindingProperty;

export interface BindingPropertyList extends Node {
  readonly properties: BindingProperties[];
  readonly multiline: boolean;
  readonly trailingComma: boolean;
}

export function createBindingPropertyList(
  properties: BindingProperties[],
  multiline: boolean,
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): BindingPropertyList {
  return {
    kind: NodeKind.BindingPropertyList,
    properties,
    multiline,
    trailingComma,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    flags,
    intersects: false,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBindingPropertyList(
  node: BindingPropertyList,
  properties: BindingProperties[],
  multiline: boolean,
  trailingComma: boolean
): BindingPropertyList {
  return node.properties !== properties || node.multiline !== multiline || node.trailingComma !== trailingComma
    ? updateNode(
        createBindingPropertyList(properties, multiline, trailingComma, node.flags, node.start, node.end),
        node
      )
    : node;
}
