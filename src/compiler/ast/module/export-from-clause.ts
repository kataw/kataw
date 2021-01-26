import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { IdentifierName } from '../expressions/identifier-name';
import { StringLiteral } from '../expressions/string-literal';
import { ExportDeclaration } from './export-declaration';
import { updateNode } from '../../utils';

export interface ExportFromClause extends Node {
  readonly moduleExportName: StringLiteral | null;
  readonly namedBinding: IdentifierName | null;
  /* @internal */
  readonly parent: ExportDeclaration | null;
}

export function createExportFromClause(
  namedBinding: IdentifierName | null,
  moduleExportName: StringLiteral | null,
  flags: NodeFlags,
  start: number,
  end: number
): ExportFromClause {
  return {
    kind: NodeKind.ExportFromClause,
    moduleExportName,
    namedBinding,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateExportFromClause(
  node: ExportFromClause,
  moduleExportName: StringLiteral | null,
  namedBinding: IdentifierName | null
): ExportFromClause {
  return node.namedBinding !== namedBinding || node.moduleExportName !== moduleExportName
    ? updateNode(createExportFromClause(namedBinding, moduleExportName, node.flags, node.start, node.end), node)
    : node;
}
