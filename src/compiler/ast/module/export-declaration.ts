import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';
import { NamedExports } from './named-exports';
import { Statement } from '../statements';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { VariableStatement } from '../statements/variable-stmt';
import { LexicalDeclaration } from '../statements/lexical-declaration';
import { FunctionDeclaration } from '../statements/function-declaration';
import { ClassDeclaration } from '../statements/class-declaration';
import { ExportFromClause } from './export-from-clause';
import { Expression } from '../expressions';
import { updateNode } from '../../utils';

/** Export declaration */
export type ExportDeclarations =
  | AssignmentExpression
  | VariableStatement
  | LexicalDeclaration
  | FunctionDeclaration
  | ClassDeclaration
  | Statement;

export interface ExportDeclaration extends Node {
  readonly declaration: ExportDeclarations | null;
  readonly namedExports: NamedExports | null;
  readonly fromClause: StringLiteral | Expression;
  readonly exportFromClause: ExportFromClause | null;
  readonly isTypeOnly: boolean;
}

export function createExportDeclaration(
  declaration: ExportDeclarations | null,
  namedExports: NamedExports | null,
  fromClause: StringLiteral | Expression,
  exportFromClause: ExportFromClause | null,
  isTypeOnly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ExportDeclaration {
  return {
    kind: NodeKind.ExportDeclaration,
    declaration,
    namedExports,
    exportFromClause,
    fromClause,
    isTypeOnly,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateExportDeclaration(
  node: ExportDeclaration,
  declaration: ExportDeclarations | null,
  namedExports: NamedExports | null,
  fromClause: StringLiteral | Expression,
  exportFromClause: ExportFromClause | null,
  isTypeOnly: boolean
): ExportDeclaration {
  return node.declaration !== declaration ||
    node.namedExports !== namedExports ||
    node.fromClause !== fromClause ||
    node.exportFromClause !== exportFromClause ||
    node.isTypeOnly !== isTypeOnly
    ? updateNode(
        createExportDeclaration(
          declaration,
          namedExports,
          fromClause,
          exportFromClause,
          isTypeOnly,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
