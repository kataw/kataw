import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxText } from './jsx-text';
import { JsxMemberExpression } from './jsx-member-expression';
import { JsxElement } from './jsx-element';
import { JsxSelfClosingElement } from './jsx-self-closing-element';
import { JsxFragment } from './jsx-fragment';
import { updateNode } from '../../utils';

/**
 * Jsx children list
 */

export type JsxChild = JsxText | JsxMemberExpression | JsxElement | JsxSelfClosingElement | JsxFragment;

export interface JsxChildrenList extends Node {
  readonly children: JsxChild[];
}

export function createJsxChildrenList(
  children: JsxChild[],
  flags: NodeFlags,
  start: number,
  end: number
): JsxChildrenList {
  return {
    kind: NodeKind.JsxChildrenList,
    children,
    flags,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxChildrenList(node: JsxChildrenList, children: JsxChild[] | any): JsxChildrenList {
  return node.children !== children
    ? updateNode(createJsxChildrenList(children, node.flags, node.start, node.end), node)
    : node;
}
