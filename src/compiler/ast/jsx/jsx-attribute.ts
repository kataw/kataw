import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxIdentifier } from './jsx-identifier';
import { JsxMemberExpression } from './jsx-member-expression';
import { JsxNamespacedName } from './jsx-namespaced-name';
import { StringLiteral } from '../expressions/string-literal';
import { JsxFragment } from './jsx-fragment';
import { JsxElement } from './jsx-element';
import { JsxSelfClosingElement } from './jsx-self-closing-element';

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
  start: number,
  end: number
): JsxAttribute {
  return {
    kind: NodeKind.JsxAttribute,
    name,
    initializer,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: name.transformFlags | TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
