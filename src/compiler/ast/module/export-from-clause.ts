import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { IdentifierName } from '../expressions/identifier-name';
import { StringLiteral } from '../expressions/string-literal';
import { ExportDeclaration } from './export-declaration';

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
