import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxText } from './jsx-text';
import { JsxMemberExpression } from './jsx-member-expression';
import { JsxElement } from './jsx-element';
import { JsxSelfClosingElement } from './jsx-self-closing-element';
import { JsxFragment } from './jsx-fragment';

/**
 * Jsx children list
 */

export type JsxChild = JsxText | JsxMemberExpression | JsxElement | JsxSelfClosingElement | JsxFragment;

export interface JsxChildrenList extends Node {
  readonly children: JsxChild[] | any;
}

export function createJsxChildrenList(children: JsxChild[] | any, start: number, end: number): JsxChildrenList {
  return {
    kind: NodeKind.JsxChildrenList,
    children,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
