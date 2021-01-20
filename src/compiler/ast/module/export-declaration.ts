import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

import { StringLiteral } from '../expressions/string-literal';
import { ExportSpecifier } from './export-specifier';
import { Script } from '../script';
import { Module } from '../module';
import { Statement } from '../statements';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { VariableStatement } from '../statements/variable-stmt';
import { LexicalDeclaration } from '../declarations/lexical-declaration';
import { FunctionDeclaration } from '../declarations/function-declaration';
import { ClassDeclaration } from '../declarations/class-declaration';
import { ExportFromClause } from './export-from-clause';

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
  readonly fromClause: StringLiteral | null;
  readonly exportFromClause: ExportFromClause | null;
  /* @internal */
  readonly parent: Script | Module | null;
}

export function createExportDeclaration(
  declaration: ExportDeclarations | null,
  namedExports: ExportSpecifier[],
  fromClause: StringLiteral | null,
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
