import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StringLiteral } from '../expressions/string-literal';
import { NamedExports } from './named-exports';
import { StatementNode } from '../stmt';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { VariableStatement } from '../stmt/variable-stmt';
import { LexicalDeclaration } from '../stmt/lexical-declaration';
import { FunctionDeclaration } from '../stmt/function-declaration';
import { ClassDeclaration } from '../stmt/class-declaration';
import { ExportFromClause } from './export-from-clause';
import { ExpressionNode } from '../expressions';

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
  readonly fromClause: StringLiteral | ExpressionNode;
  readonly exportFromClause: ExportFromClause | null;
}

export function createExportDeclaration(
  exportKeyword: SyntaxToken<TokenSyntaxKind>,
  declaration: ExportDeclarations | null,
  namedExports: NamedExports | null,
  fromClause: StringLiteral | ExpressionNode,
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
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
