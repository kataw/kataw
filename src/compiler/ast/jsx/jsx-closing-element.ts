import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';

/**
 * Jsx closing element
 */

export interface JsxClosingElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
}

export function createJsxClosingElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  start: number,
  end: number
): JsxClosingElement {
  return {
    kind: NodeKind.JsxClosingElement,
    tagName,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: tagName.transformFlags | TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
