import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxMemberExpression } from './jsx-member-expression';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { StringLiteral } from '../expressions/string-literal';
import { JsxFragment } from './jsx-fragment';
import { JsxElement } from './jsx-element';
import { JsxSelfClosingElement } from './jsx-self-closing-element';
import { updateNode } from '../../utils';

/**
 * Jsx attribute
 */

export interface JsxAttribute extends Node {
  readonly name: JsxIdentifier | JsxNamespacedName;
  readonly initializer: StringLiteral | JsxMemberExpression | JsxFragment | JsxElement | JsxSelfClosingElement | null;
}

export function createJsxAttribute(
  name: JsxIdentifier | JsxNamespacedName,
  initializer: StringLiteral | JsxMemberExpression | JsxFragment | JsxElement | JsxSelfClosingElement | null,
  flags: NodeFlags,
  start: number,
  end: number
): JsxAttribute {
  return {
    kind: NodeKind.JsxAttribute,
    name,
    initializer,
    flags,
    intersects: false,
    transformFlags:
      name.transformFlags | (initializer ? initializer.transformFlags : NodeFlags.None) | TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxAttribute(
  node: JsxAttribute,
  name: JsxIdentifier | JsxNamespacedName,
  initializer: StringLiteral | JsxMemberExpression | JsxFragment | JsxElement | JsxSelfClosingElement | null
): JsxAttribute {
  return node.name !== name || node.initializer !== initializer
    ? updateNode(createJsxAttribute(name, initializer, node.flags, node.start, node.end), node)
    : node;
}
