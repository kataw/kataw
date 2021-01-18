import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { RootNode } from '../root-node';
import { Expression } from '../expressions';
import { FunctionDeclaration } from '../declarations/function-declaration';
import { ClassDeclaration } from '../declarations/class-declaration';

// [MODIFIED]

export interface ExportDefault extends Node {
  readonly declaration: FunctionDeclaration | ClassDeclaration | Expression;
  /* @internal */
  readonly parent: RootNode | null;
}

export function createExportDefault(
  declaration: FunctionDeclaration | ClassDeclaration | Expression,
  flags: NodeFlags,
  start: number,
  end: number
): ExportDefault {
  return {
    kind: NodeKind.ExportDefault,
    declaration,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
