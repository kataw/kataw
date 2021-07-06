import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { StringLiteral } from '../expressions/string-literal';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface ImportSpecifier extends SyntaxNode {
  readonly typeKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly name: Identifier | DummyIdentifier | null;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: Identifier | DummyIdentifier | null;
  readonly moduleExportName: StringLiteral | null;
}

export function createImportSpecifier(
  typeKeyword: SyntaxToken<TokenSyntaxKind> | null,
  moduleExportName: StringLiteral | null,
  name: Identifier | DummyIdentifier | null,
  asKeyword: SyntaxToken<TokenSyntaxKind> | null,
  binding: Identifier | DummyIdentifier | null,
  start: number,
  end: number
): ImportSpecifier {
  return {
    kind: SyntaxKind.ImportSpecifier,
    typeKeyword,
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
