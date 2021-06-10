import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions';
import { ImportClause } from './import-clause';
import { FromClause } from './from-clause';

export interface ImportDeclaration extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly typeKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly typeofKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly fromClause: FromClause | null;
  readonly moduleSpecifier: ExpressionNode | null;
  readonly importClause: ImportClause | null;
}

export function createImportDeclaration(
  importKeyword: SyntaxToken<TokenSyntaxKind>,
  typeKeyword: SyntaxToken<TokenSyntaxKind> | null,
  typeofKeyword: SyntaxToken<TokenSyntaxKind> | null,
  /** If this is not a StringLiteral it will be a grammar error. */
  fromClause: FromClause | null,
  moduleSpecifier: ExpressionNode | null,
  importClause: ImportClause | null,
  flags: NodeFlags,
  start: number,
  end: number
): ImportDeclaration {
  return {
    kind: SyntaxKind.ImportDeclaration,
    importKeyword,
    typeKeyword,
    typeofKeyword,
    fromClause,
    moduleSpecifier,
    importClause,
    flags,
    start,
    end
  };
}
