import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';
import { updateNode } from '../../utils';

/**
 * Jsx closing element
 */

export interface JsxClosingElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
}

export function createJsxClosingElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  flags: NodeFlags,
  start: number,
  end: number
): JsxClosingElement {
  return {
    kind: NodeKind.JsxClosingElement,
    tagName,
    flags,
    intersects: false,
    transformFlags: tagName.transformFlags | TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxClosingElement(
  node: JsxClosingElement,
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess
): JsxClosingElement {
  return node.tagName !== tagName
    ? updateNode(createJsxClosingElement(tagName, node.flags, node.start, node.end), node)
    : node;
}
