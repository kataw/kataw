import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { BindingElement } from './binding-element';
import { Elison } from './elison';
import { ArrayBindingPattern } from './array-binding-pattern';

/**
 * BindingElementList
 */

export type BindingListElements = Elison | BindingElement;

export interface BindingElementList extends Node {
  readonly elements: BindingListElements[];
  readonly trailingComma: boolean;
  /* @internal */
  readonly parent: ArrayBindingPattern | null;
}

export function createBindingElementList(
  elements: BindingListElements[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): BindingElementList {
  return {
    kind: NodeKind.BindingElementList,
    elements,
    trailingComma,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBindingElementList(
  node: BindingElementList,
  elements: BindingListElements[]
): BindingElementList {
  return node.elements !== elements
    ? updateNode(createBindingElementList(elements, node.trailingComma, node.flags, node.start, node.end), node)
    : node;
}
