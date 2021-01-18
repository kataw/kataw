import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxFragment } from './jsx-fragment';

/**
 * The opening element of a <>...</> JsxFragment
 */

export interface JsxOpeningFragment extends Node {
  readonly parent: JsxFragment | null;
}

export function createJsxOpeningFragment(start: number, end: number): JsxOpeningFragment {
  return {
    kind: NodeKind.JsxOpeningFragment,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
