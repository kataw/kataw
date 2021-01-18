import { Node, NodeFlags, NodeKind } from '../node';
import { JsxClosingFragment } from './jsx-closing-fragment';
import { JsxOpeningFragment } from './jsx-opening-fragment';
import { JsxChildrenList } from './jsx-children-list';

/**
 * A JSX expression of the form <>...</>
 */

export interface JsxFragment extends Node {
  readonly openingFragment: JsxOpeningFragment;
  readonly childrenList: JsxChildrenList;
  readonly closingFragment: JsxClosingFragment;
}

export function createJsxFragment(
  openingFragment: JsxOpeningFragment,
  childrenList: JsxChildrenList,
  closingFragment: JsxClosingFragment,
  start: number,
  end: number
): JsxFragment {
  return {
    kind: NodeKind.JsxFragment,
    openingFragment,
    childrenList,
    closingFragment,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: openingFragment.transformFlags | closingFragment.transformFlags | closingFragment.transformFlags,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
