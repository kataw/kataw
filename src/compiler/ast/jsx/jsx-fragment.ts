import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { JsxClosingFragment } from './jsx-closing-fragment';
import { JsxOpeningFragment } from './jsx-opening-fragment';
import { JsxChildrenList } from './jsx-children-list';
import { updateNode } from '../../utils';

/**
 * A JSX expression of the form <>...</>
 */

export interface JsxFragment extends Node {
  readonly openingFragment: JsxOpeningFragment;
  readonly children: JsxChildrenList;
  readonly closingFragment: JsxClosingFragment;
}

export function createJsxFragment(
  openingFragment: JsxOpeningFragment,
  children: JsxChildrenList,
  closingFragment: JsxClosingFragment,
  flags: NodeFlags,
  start: number,
  end: number
): JsxFragment {
  return {
    kind: NodeKind.JsxFragment,
    openingFragment,
    children,
    closingFragment,
    flags,
    intersects: false,
    transformFlags:
      openingFragment.transformFlags |
      closingFragment.transformFlags |
      closingFragment.transformFlags |
      TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxFragment(
  node: JsxFragment,
  openingFragment: JsxOpeningFragment,
  children: JsxChildrenList,
  closingFragment: JsxClosingFragment
): JsxFragment {
  return node.openingFragment !== openingFragment ||
    node.children !== children ||
    node.closingFragment !== closingFragment
    ? updateNode(createJsxFragment(openingFragment, children, closingFragment, node.flags, node.start, node.end), node)
    : node;
}
