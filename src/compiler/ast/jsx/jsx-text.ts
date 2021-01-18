import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxElement } from './jsx-element';

/**
 * Jsx Text
 */

export interface JsxText extends Node {
  readonly text: string;
  readonly parent: JsxElement | null;
}

export function createJsxText(text: string, start: number, end: number): JsxText {
  return {
    kind: NodeKind.JsxChildrenList,
    text,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
