import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression } from '.';

/**
 * Assignment rest element
 */
export interface AssignmentRestElement extends Node {
  readonly argument: Expression;
}

export function createAssignmentRestElement(
  argument: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): AssignmentRestElement {
  return {
    kind: NodeKind.AssignmentRestElement,
    argument,
    flags,
    intersects: false,
    transformFlags: TransformFlags.RestOrSpread,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateAssignmentRestElement(node: AssignmentRestElement, argument: Expression): AssignmentRestElement {
  return node.argument !== argument
    ? updateNode(createAssignmentRestElement(argument, node.flags, node.start, node.end), node)
    : node;
}
