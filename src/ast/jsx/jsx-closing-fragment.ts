import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * JsxClosingFragment
 */

export type JsxClosingFragment = Node;

export function createJsxClosingFragment(flags: NodeFlags, start: number, end: number): JsxClosingFragment {
  return {
    kind: NodeKind.JsxClosingFragment,
    flags,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
