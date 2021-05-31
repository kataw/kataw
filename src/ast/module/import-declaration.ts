import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions';
import { ImportClause } from './import-clause';
import { FromClause } from './from-clause';

export interface ImportDeclaration extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly fromClause: FromClause | null;
  readonly moduleSpecifier: ExpressionNode | null;
  readonly importClause: ImportClause | null;
}

export function createImportDeclaration(
  importKeyword: SyntaxToken<TokenSyntaxKind>,
  /** If this is not a StringLiteral it will be a grammar error. */
  fromClause: FromClause | null,
  moduleSpecifier: ExpressionNode | null,
  importClause: ImportClause | null,
  start: number,
  end: number
): ImportDeclaration {
  return {
    kind: SyntaxKind.ImportDeclaration,
    importKeyword,
    fromClause,
    moduleSpecifier,
    importClause,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
