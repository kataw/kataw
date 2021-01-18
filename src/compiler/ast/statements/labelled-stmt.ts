import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { Statement } from '.';
import { LabelIdentifier } from '../expressions/labelled-Identifier';

/**
 * Labelled statement
 */
export interface LabelledStatement extends Node {
  readonly label: LabelIdentifier;
  readonly statement: Statement;
  readonly isWebCompat: boolean;
}

export function createLabelledStatement(
  label: LabelIdentifier,
  statement: Statement,
  isWebCompat: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): LabelledStatement {
  return {
    kind: NodeKind.LabelledStatement,
    label,
    statement,
    isWebCompat,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateLabelledStatement(
  node: LabelledStatement,
  label: LabelIdentifier,
  statement: Statement
): LabelledStatement {
  return node.label !== label || node.statement !== statement
    ? updateNode(createLabelledStatement(label, statement, node.isWebCompat, node.flags, node.start, node.end), node)
    : node;
}
