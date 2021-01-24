import { Node, NodeFlags, NodeKind } from '../node';
import { JsxOpeningElement } from './jsx-opening-element';
import { JsxClosingElement } from './jsx-closing-element';
import { JsxChildrenList } from './jsx-children-list';
import { updateNode } from '../../utils';

/**
 * JsxElement
 */

export interface JsxElement extends Node {
  readonly openingElement: JsxOpeningElement;
  readonly children: JsxChildrenList;
  readonly closingElement: JsxClosingElement;
}

export function createJsxElement(
  openingElement: JsxOpeningElement,
  children: JsxChildrenList,
  closingElement: JsxClosingElement,
  flags: NodeFlags,
  start: number,
  end: number
): JsxElement {
  return {
    kind: NodeKind.JsxElement,
    openingElement,
    children,
    closingElement,
    flags,
    intersects: false,
    transformFlags: openingElement.transformFlags | children.transformFlags | closingElement.transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
export function updateJsxElement(
  node: JsxElement,
  openingElement: JsxOpeningElement,
  children: JsxChildrenList,
  closingElement: JsxClosingElement
): JsxElement {
  return node.openingElement !== openingElement || node.children !== children || node.closingElement !== closingElement
    ? updateNode(createJsxElement(openingElement, children, closingElement, node.flags, node.start, node.end), node)
    : node;
}
