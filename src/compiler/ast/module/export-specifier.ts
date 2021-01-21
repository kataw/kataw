import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { IdentifierName } from '../expressions/identifier-name';
import { StringLiteral } from '../expressions/string-literal';
import { ImportDeclaration } from './import-declaration';
import { updateNode } from '../../../visitor/common';

export interface ExportSpecifier extends Node {
  readonly name: IdentifierName;
  readonly binding: IdentifierName | null;
  readonly moduleExportName: StringLiteral | null;
  /* @internal */
  readonly parent: ImportDeclaration | null;
}

export function createExportSpecifier(
  name: IdentifierName,
  moduleExportName: StringLiteral | null,
  binding: IdentifierName | null,
  flags: NodeFlags,
  start: number,
  end: number
): ExportSpecifier {
  return {
    kind: NodeKind.ExportSpecifier,
    moduleExportName,
    name,
    binding,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateExportSpecifier(
  node: ExportSpecifier,
  name: IdentifierName,
  binding: IdentifierName | null,
  moduleExportName: StringLiteral | null
): ExportSpecifier {
  return node.name !== name || node.binding !== binding || node.moduleExportName !== moduleExportName
    ? updateNode(createExportSpecifier(name, moduleExportName, binding, node.flags, node.start, node.end), node)
    : node;
}
