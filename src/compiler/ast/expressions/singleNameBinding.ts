import { AssignmentExpression } from './assignment-expr';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { BindingIdentifier } from './binding-identifier';
/**
 * SingleNameBinding
 */
export interface SingleNameBinding extends Node {
  readonly ellipsis: boolean;
  readonly left: BindingIdentifier;
  readonly right: AssignmentExpression | null;
}

export function createSingleNameBinding(
  ellipsis: boolean,
  left: BindingIdentifier,
  right: AssignmentExpression | null,
  flags: NodeFlags,
  start: number,
  end: number
): SingleNameBinding {
  return {
    kind: NodeKind.SingleNameBinding,
    ellipsis,
    left,
    right,
    flags,
    intersects: false,
    transformFlags: TransformFlags.BindingPattern,
    start,
    end
  };
}

export function updateSingleNameBinding(
  ellipsis: boolean,
  node: SingleNameBinding,
  left: BindingIdentifier,
  right: AssignmentExpression | null
): SingleNameBinding {
  return node.ellipsis !== ellipsis || node.left !== left || node.right !== right
    ? updateNode(createSingleNameBinding(ellipsis, left, right, node.flags, node.start, node.end), node)
    : node;
}
