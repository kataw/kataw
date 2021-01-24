import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Break statement.
 */
export interface BreakStatement extends Node {
  readonly label: IdentifierReference | null;
}

export function createBreakStatement(
  label: IdentifierReference | null,
  flags: NodeFlags,
  start: number,
  end: number
): BreakStatement {
  return {
    kind: NodeKind.BreakStatement,
    label,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateBreakStatement(node: BreakStatement, label: IdentifierReference | null): BreakStatement {
  return node.label !== label ? updateNode(createBreakStatement(label, node.flags, node.start, node.end), node) : node;
}
