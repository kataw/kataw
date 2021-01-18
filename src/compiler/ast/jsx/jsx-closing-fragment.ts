import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * JsxClosingFragment
 */

export type JsxClosingFragment = Node;

export function createJsxClosingFragment(start: number, end: number): JsxClosingFragment {
  return {
    kind: NodeKind.JsxClosingFragment,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
