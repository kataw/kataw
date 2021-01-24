import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxElement } from './jsx-element';
import { updateNode } from '../../utils';

/**
 * Jsx Text
 */

export interface JsxText extends Node {
  readonly text: string;
  readonly parent: JsxElement | null;
}

export function createJsxText(text: string, flags: NodeFlags, start: number, end: number): JsxText {
  return {
    kind: NodeKind.JsxText,
    text,
    flags,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
export function updateJsxText(node: JsxText, text: string): JsxText {
  return node.text !== text ? updateNode(createJsxText(text, node.flags, node.start, node.end), node) : node;
}
