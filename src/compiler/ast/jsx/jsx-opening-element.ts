import { Node, NodeFlags, NodeKind } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';
import { JsxAttributesList } from './jsx-attribute-list';

/**
 * Jsx opening element
 */

export interface JsxOpeningElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  readonly attributes: JsxAttributesList;
  readonly typeParameters: any;
}

export function createJsxOpeningElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributes: JsxAttributesList,
  typeParameters: any,
  start: number,
  end: number
): JsxOpeningElement {
  return {
    kind: NodeKind.JsxOpeningElement,
    tagName,
    attributes,
    typeParameters,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: tagName.transformFlags | attributes.transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
