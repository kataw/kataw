import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { Script } from '../script';
import { Module } from '../module';
import { Expression } from '../expressions';
import { updateNode } from '../../utils';

export interface ExportAssignment extends Node {
  readonly expression: Expression;
  /* @internal */
  readonly parent: Script | Module | null;
}

export function createExportAssignment(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ExportAssignment {
  return {
    kind: NodeKind.ExportAssignment,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateExportAssignment(node: ExportAssignment, expression: Expression): ExportAssignment {
  return node.expression !== expression
    ? updateNode(createExportAssignment(expression, node.flags, node.start, node.end), node)
    : node;
}
