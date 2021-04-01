import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ImportSpecifier extends SyntaxNode {
  readonly name: Identifier | null;
  readonly binding: Identifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createImportSpecifier(
  moduleExportName: StringLiteral | null,
  name: Identifier | null,
  binding: Identifier | null,
  start: number,
  end: number
): ImportSpecifier {
  return {
    kind: SyntaxKind.ImportSpecifier,
    moduleExportName,
    name,
    binding,
    flags: NodeFlags.IsStatement,
    autofix: AutoFix.NotFixable,
    start,
    end
  };
}
