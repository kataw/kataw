import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ExportSpecifier extends SyntaxNode {
  readonly name: Identifier | StringLiteral;
  readonly binding: Identifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createExportSpecifier(
  name: Identifier | StringLiteral,
  moduleExportName: StringLiteral | null,
  binding: Identifier | null,
  start: number,
  end: number
): ExportSpecifier {
  return {
    kind: SyntaxKind.ExportSpecifier,
    moduleExportName,
    name,
    binding,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
