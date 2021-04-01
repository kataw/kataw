import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ExportFromClause extends SyntaxNode {
  readonly moduleExportName: StringLiteral | null;
  readonly namedBinding: Identifier | null;
}

export function createExportFromClause(
  namedBinding: Identifier | null,
  moduleExportName: StringLiteral | null,
  start: number,
  end: number
): ExportFromClause {
  return {
    kind: SyntaxKind.ExportFromClause,
    moduleExportName,
    namedBinding,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
