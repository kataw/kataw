import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { AssignmentExpression } from './assignment-expr';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { BindingIdentifier } from './binding-identifier';

/**
 * Binding element
 */

export interface BindingElement extends Node {
  readonly ellipsis: boolean; // Present on rest parameter
  readonly left: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly right: AssignmentExpression;
}

export function createBindingElement(
  ellipsis: boolean,
  left: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  right: AssignmentExpression,
  flags: NodeFlags,
  start: number,
  end: number
): BindingElement {
  return {
    kind: NodeKind.BindingElement,
    ellipsis,
    left,
    right,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | (ellipsis ? TransformFlags.RestOrSpread : TransformFlags.None),
    start,
    end
  };
}

export function updateBindingElement(
  node: BindingElement,
  ellipsis: boolean,
  left: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  right: AssignmentExpression
): BindingElement {
  return node.ellipsis !== ellipsis || node.left !== left
    ? updateNode(createBindingElement(ellipsis, left, right, node.flags, node.start, node.end), node)
    : node;
}
