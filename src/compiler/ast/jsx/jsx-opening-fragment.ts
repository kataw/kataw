import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxFragment } from './jsx-fragment';

/**
 * The opening element of a <>...</> JsxFragment
 */

export interface JsxOpeningFragment extends Node {}

export function createJsxOpeningFragment(flags: NodeFlags, start: number, end: number): JsxOpeningFragment {
  return {
    kind: NodeKind.JsxOpeningFragment,
    flags,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
