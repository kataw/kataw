import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StringLiteral } from '../expressions/string-literal';
import { ExpressionNode } from '../expressions';
import { ImportClause } from './import-clause';

export interface ImportDeclaration extends SyntaxNode {
  readonly fromClause: StringLiteral | ExpressionNode;
  readonly moduleSpecifier: ExpressionNode | null;
  readonly importClause: ImportClause | null;
}

export function createImportDeclaration(
  /** If this is not a StringLiteral it will be a grammar error. */
  fromClause: StringLiteral | ExpressionNode,
  moduleSpecifier: ExpressionNode | null,
  importClause: ImportClause | null,
  start: number,
  end: number
): ImportDeclaration {
  return {
    kind: SyntaxKind.ImportDeclaration,
    fromClause,
    moduleSpecifier,
    importClause,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
