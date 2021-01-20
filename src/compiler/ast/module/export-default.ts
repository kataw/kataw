import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { Script } from '../script';
import { Module } from '../module';
import { Expression } from '../expressions';
import { FunctionDeclaration } from '../declarations/function-declaration';
import { ClassDeclaration } from '../declarations/class-declaration';

// [MODIFIED]

export interface ExportDefault extends Node {
  readonly declaration: FunctionDeclaration | ClassDeclaration | Expression;
  /* @internal */
  readonly parent: Script | Module | null;
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
