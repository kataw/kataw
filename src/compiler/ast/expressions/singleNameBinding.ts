import { AssignmentExpression } from './assignment-expr';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { BindingIdentifier } from './binding-identifier';
/**
 * SingleNameBinding
 */
export interface SingleNameBinding extends Node {
  readonly ellipsis: boolean;
  readonly binding: BindingIdentifier;
  readonly initializer: AssignmentExpression | null;
}

export function createSingleNameBinding(
  ellipsis: boolean,
  binding: BindingIdentifier,
  initializer: AssignmentExpression | null,
  flags: NodeFlags,
  start: number,
  end: number
): SingleNameBinding {
  return {
    kind: NodeKind.SingleNameBinding,
    ellipsis,
    binding,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.BindingPattern,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateSingleNameBinding(
  node: SingleNameBinding,
  binding: BindingIdentifier,
  initializer: AssignmentExpression | null
): SingleNameBinding {
  return node.binding !== binding || node.binding !== binding
    ? updateNode(createSingleNameBinding(node.ellipsis, binding, initializer, node.flags, node.start, node.end), node)
    : node;
}
