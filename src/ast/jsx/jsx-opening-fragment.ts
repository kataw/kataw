import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxFragment } from './jsx-fragment';

/**
 * The opening element of a <>...</> JsxFragment
 */

export type JsxOpeningFragment = Node;

export function createJsxOpeningFragment(flags: NodeFlags, start: number, end: number): JsxOpeningFragment {
  return {
    kind: NodeKind.JsxOpeningFragment,
    flags,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
