import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { IdentifierName } from '../expressions/identifier-name';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { StringLiteral } from '../expressions/string-literal';

export interface ImportSpecifier extends Node {
  readonly name: IdentifierName | BindingIdentifier | null;
  readonly binding: IdentifierName | BindingIdentifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createImportSpecifier(
  moduleExportName: StringLiteral | null,
  name: IdentifierName | BindingIdentifier | null,
  binding: IdentifierName | BindingIdentifier | null,
  flags: NodeFlags,
  start: number,
  end: number
): ImportSpecifier {
  return {
    kind: NodeKind.ImportSpecifier,
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

export function updateImportSpecifier(
  node: ImportSpecifier,
  moduleExportName: StringLiteral | null,
  name: IdentifierName | BindingIdentifier | null,
  binding: IdentifierName | BindingIdentifier | null
): ImportSpecifier {
  return node.moduleExportName !== moduleExportName || node.name !== name || node.binding !== binding
    ? updateNode(createImportSpecifier(moduleExportName, name, binding, node.flags, node.start, node.end), node)
    : node;
}
