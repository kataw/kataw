import { Node, NodeFlags, NodeKind } from '../node';
import { JsxAttributesList } from './jsx-attribute-list';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';
import { updateNode } from '../../utils';
import { TypeArguments } from '../types/type-arguments';

/**
 * JsxSelfClosingElement
 */

export interface JsxSelfClosingElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  readonly attributes: JsxAttributesList;
  readonly typeArguments: TypeArguments | null;
}

export function createJsxSelfClosingElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributes: JsxAttributesList,
  typeArguments: TypeArguments | null,
  flags: NodeFlags,
  start: number,
  end: number
): JsxSelfClosingElement {
  return {
    kind: NodeKind.JsxSelfClosingElement,
    tagName,
    attributes,
    typeArguments,
    flags,
    symbol: null,
    transformFlags: tagName.transformFlags | attributes.transformFlags,
    start,
    end
  };
}
export function updateJsxSelfClosingElement(
  node: JsxSelfClosingElement,
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributes: JsxAttributesList,
  typeArguments: TypeArguments | null
): JsxSelfClosingElement {
  return node.tagName !== tagName || node.attributes !== attributes || node.typeArguments !== typeArguments
    ? updateNode(
        createJsxSelfClosingElement(tagName, attributes, typeArguments, node.flags, node.start, node.end),
        node
      )
    : node;
}
