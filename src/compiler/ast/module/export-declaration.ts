import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';
import { ExportSpecifier } from './export-specifier';
import { Script } from '../script';
import { Module } from '../module';
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
  readonly namedExports: ExportSpecifier[];
  readonly fromClause: StringLiteral | Expression;
  readonly exportFromClause: ExportFromClause | null;
  /* @internal */
  readonly parent: Script | Module | null;
}

export function createExportDeclaration(
  declaration: ExportDeclarations | null,
  namedExports: ExportSpecifier[],
  fromClause: StringLiteral | Expression,
  exportFromClause: ExportFromClause | null,
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
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateExportDeclaration(
  node: ExportDeclaration,
  declaration: ExportDeclarations | null,
  namedExports: ExportSpecifier[],
  fromClause: StringLiteral | Expression,
  exportFromClause: ExportFromClause | null
): ExportDeclaration {
  return node.declaration !== declaration ||
    node.namedExports !== namedExports ||
    node.fromClause !== fromClause ||
    node.exportFromClause !== exportFromClause
    ? updateNode(
        createExportDeclaration(
          declaration,
          namedExports,
          fromClause,
          exportFromClause,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
