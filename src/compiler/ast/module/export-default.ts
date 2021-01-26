import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { Script } from '../script';
import { Module } from '../module';
import { Expression } from '../expressions';
import { FunctionDeclaration } from '../statements/function-declaration';
import { ClassDeclaration } from '../statements/class-declaration';
import { updateNode } from '../../utils';

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

export function updateExportDefault(
  node: ExportDefault,
  declaration: FunctionDeclaration | ClassDeclaration | Expression
): ExportDefault {
  return node.declaration !== declaration
    ? updateNode(createExportDefault(declaration, node.flags, node.start, node.end), node)
    : node;
}
