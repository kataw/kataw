import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { NamedExports } from './named-exports';
import { StatementNode } from '../statements';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { VariableStatement } from '../statements/variable-stmt';
import { LexicalDeclaration } from '../statements/lexical-declaration';
import { FunctionDeclaration } from '../statements/function-declaration';
import { ClassDeclaration } from '../statements/class-declaration';
import { ExportFromClause } from './export-from-clause';
import { FromClause } from './from-clause';

/** Export declaration */
export type ExportDeclarations =
  | AssignmentExpression
  | VariableStatement
  | LexicalDeclaration
  | FunctionDeclaration
  | ClassDeclaration
  | StatementNode;

export interface ExportDeclaration extends SyntaxNode {
  readonly exportKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly declaration: ExportDeclarations | null;
  readonly namedExports: NamedExports | null;
  readonly fromClause: FromClause;
  readonly exportFromClause: ExportFromClause | null;
}

export function createExportDeclaration(
  exportKeyword: SyntaxToken<TokenSyntaxKind>,
  declaration: ExportDeclarations | null,
  namedExports: NamedExports | null,
  fromClause: FromClause,
  exportFromClause: ExportFromClause | null,
  start: number,
  end: number
): ExportDeclaration {
  return {
    kind: SyntaxKind.ExportDeclaration,
    exportKeyword,
    declaration,
    namedExports,
    exportFromClause,
    fromClause,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
