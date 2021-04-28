import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StringLiteral } from '../expressions/string-literal';
import { ExpressionNode } from '../expressions';
import { ImportClause } from './import-clause';

export interface ImportDeclaration extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly fromClause: StringLiteral | ExpressionNode;
  readonly moduleSpecifier: ExpressionNode | null;
  readonly importClause: ImportClause | null;
}

export function createImportDeclaration(
  importKeyword: SyntaxToken<TokenSyntaxKind>,
  /** If this is not a StringLiteral it will be a grammar error. */
  fromClause: StringLiteral | ExpressionNode,
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
