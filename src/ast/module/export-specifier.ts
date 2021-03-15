import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { IdentifierName } from '../expressions/identifier-name';
import { StringLiteral } from '../expressions/string-literal';
import { ImportDeclaration } from './import-declaration';
import { updateNode } from '../../utils';

export interface ExportSpecifier extends Node {
  readonly name: IdentifierName | StringLiteral;
  readonly binding: IdentifierName | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createExportSpecifier(
  name: IdentifierName | StringLiteral,
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
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateExportSpecifier(
  node: ExportSpecifier,
  name: IdentifierName | StringLiteral,
  binding: IdentifierName | null,
  moduleExportName: StringLiteral | null
): ExportSpecifier {
  return node.name !== name || node.binding !== binding || node.moduleExportName !== moduleExportName
    ? updateNode(createExportSpecifier(name, moduleExportName, binding, node.flags, node.start, node.end), node)
    : node;
}
