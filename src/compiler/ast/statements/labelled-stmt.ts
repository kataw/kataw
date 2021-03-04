import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '.';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * Labelled statement
 */
export interface LabelledStatement extends Node {
  readonly label: IdentifierReference;
  readonly statement: Statement;
  readonly isWebCompat: boolean;
}

export function createLabelledStatement(
  label: IdentifierReference,
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
    start,
    end
  };
}

export function updateLabelledStatement(
  node: LabelledStatement,
  label: IdentifierReference,
  statement: Statement
): LabelledStatement {
  return node.label !== label || node.statement !== statement
    ? updateNode(createLabelledStatement(label, statement, node.isWebCompat, node.flags, node.start, node.end), node)
    : node;
}
