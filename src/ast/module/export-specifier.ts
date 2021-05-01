import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ExportSpecifier extends SyntaxNode {
  readonly name: Identifier | StringLiteral;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: Identifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createExportSpecifier(
  moduleExportName: StringLiteral | null,
  name: Identifier | StringLiteral,
  asKeyword: SyntaxToken<TokenSyntaxKind> | null,
  binding: Identifier | null,
  start: number,
  end: number
): ExportSpecifier {
  return {
    kind: SyntaxKind.ExportSpecifier,
    moduleExportName,
    name,
    asKeyword,
    binding,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
