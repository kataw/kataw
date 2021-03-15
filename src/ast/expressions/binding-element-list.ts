import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { BindingElement } from './binding-element';
import { OmittedExpression } from './omitted-expr';
import { ArrayBindingPattern } from './array-binding-pattern';

/**
 * BindingElementList
 */

export type BindingListElements = OmittedExpression | BindingElement;

export interface BindingElementList extends Node {
  readonly elements: BindingListElements[];
  readonly trailingComma: boolean;
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
    symbol: null,
    transformFlags: TransformFlags.ES2015,
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
