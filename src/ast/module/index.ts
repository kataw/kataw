import { ExportDeclaration } from './export-declaration';
import { StatementNode } from '../statements';
import { ImportDeclaration } from './import-declaration';
import { ExportDefault } from './export-default';
import { ExportFromClause } from './export-from-clause';
import { ExportSpecifier } from './export-specifier';
import { ImportsList } from './imports-list';
import { NamedExports } from './named-exports';
import { NamedImports } from './named-imports';
import { NamespaceExportDeclaration } from './namespace-export-declaration';
import { NameSpaceImport } from './namespace-import';
import { ImportClause } from './import-clause';
import { FromClause } from './from-clause';
import { ExportsList } from './exports-list';

export type ImportExport = ExportDeclaration | ExportDefault | ImportDeclaration | StatementNode;

/**
 * The set of all syntax items which are module.
 */
export type Module =
  | ExportDeclaration
  | ImportDeclaration
  | ExportDefault
  | ExportFromClause
  | ExportSpecifier
  | ImportsList
  | NamedExports
  | NamedImports
  | NamespaceExportDeclaration
  | NameSpaceImport
  | ImportClause
  | FromClause
  | ExportsList;
