import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { Expression } from '../expressions';

export interface ExternalModuleReference extends Node {
  readonly expression: Expression;
}

export function createExternalModuleReference(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ExternalModuleReference {
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
