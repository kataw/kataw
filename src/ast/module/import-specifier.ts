import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';

export interface ImportSpecifier extends SyntaxNode {
  readonly name: Identifier | null;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: Identifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createImportSpecifier(
  moduleExportName: StringLiteral | null,
  name: Identifier | null,
  asKeyword: SyntaxToken<TokenSyntaxKind> | null,
  binding: Identifier | null,
  start: number,
  end: number
): ImportSpecifier {
  return {
    kind: SyntaxKind.ImportSpecifier,
    moduleExportName,
    name,
    asKeyword,
    binding,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
