import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Continue statement.
 */
export interface ContinueStatement extends Node {
  readonly label: IdentifierReference | null;
}

export function createContinueStatement(
  label: IdentifierReference | null,
  flags: NodeFlags,
  start: number,
  end: number
): ContinueStatement {
  return {
    kind: NodeKind.ContinueStatement,
    label,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateContinueStatement(node: ContinueStatement, label: IdentifierReference | null): ContinueStatement {
  return node.label !== label
    ? updateNode(createContinueStatement(label, node.flags, node.start, node.end), node)
    : node;
}
