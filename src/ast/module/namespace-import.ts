import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

export interface NameSpaceImport extends SyntaxNode {
  readonly asteriskToken: SyntaxToken<TokenSyntaxKind>;
  readonly asKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: Identifier | DummyIdentifier | null;
}

export function createNameSpaceImport(
  asteriskToken: SyntaxToken<TokenSyntaxKind>,
  asKeyword: SyntaxToken<TokenSyntaxKind> | null,
  binding: Identifier | DummyIdentifier | null,
  start: number,
  end: number
): NameSpaceImport {
  return {
    kind: SyntaxKind.NameSpaceImport,
    asteriskToken,
    asKeyword,
    binding,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
