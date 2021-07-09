import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface ExportSpecifier extends SyntaxNode {
  readonly name: Identifier | StringLiteral | DummyIdentifier;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: Identifier | DummyIdentifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createExportSpecifier(
  moduleExportName: StringLiteral | null,
  name: Identifier | StringLiteral | DummyIdentifier,
  asKeyword: SyntaxToken<TokenSyntaxKind> | null,
  binding: Identifier | DummyIdentifier | null,
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
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
