import { Node, NodeFlags, NodeKind } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { JsxTagNamePropertyAccess } from './jsx-tag-name-property-access';
import { ThisExpression } from '../expressions/this-expr';
import { JsxAttributesList } from './jsx-attribute-list';
import { updateNode } from '../../utils';
import { TypeArguments } from '../types/type-arguments';

/**
 * Jsx opening element
 */

export interface JsxOpeningElement extends Node {
  readonly tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess;
  readonly attributes: JsxAttributesList;
  readonly typeArguments: TypeArguments | null;
}

export function createJsxOpeningElement(
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributes: JsxAttributesList,
  typeArguments: TypeArguments | null,
  flags: NodeFlags,
  start: number,
  end: number
): JsxOpeningElement {
  return {
    kind: NodeKind.JsxOpeningElement,
    tagName,
    attributes,
    typeArguments,
    flags,
    intersects: false,
    transformFlags: tagName.transformFlags | attributes.transformFlags,
    start,
    end
  };
}
export function updateJsxOpeningElement(
  node: JsxOpeningElement,
  tagName: ThisExpression | JsxNamespacedName | JsxIdentifier | JsxTagNamePropertyAccess,
  attributes: JsxAttributesList,
  typeArguments: TypeArguments | null
): JsxOpeningElement {
  return node.tagName !== tagName || node.typeArguments !== typeArguments || node.attributes !== attributes
    ? updateNode(createJsxOpeningElement(tagName, attributes, typeArguments, node.flags, node.start, node.end), node)
    : node;
}
