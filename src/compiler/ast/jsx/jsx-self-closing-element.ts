import { Node, NodeFlags, NodeKind } from '../node';
import { JsxAttributesList } from './jsx-attribute-list';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';

/**
 * JsxSelfClosingElement
 */

export interface JsxSelfClosingElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  readonly attributesList: JsxAttributesList;
  readonly typeArguments: any;
}

export function createJsxSelfClosingElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributesList: JsxAttributesList,
  typeArguments: any,
  start: number,
  end: number
): JsxSelfClosingElement {
  return {
    kind: NodeKind.JsxSelfClosingElement,
    tagName,
    attributesList,
    typeArguments,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: tagName.transformFlags | attributesList.transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
