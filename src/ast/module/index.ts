import { ExportDeclaration } from './export-declaration';
import { StatementNode } from '../statements';
import { ImportDeclaration } from './import-declaration';
import { ExportDefault } from './export-default';

export type ImportExport = ExportDeclaration | ExportDefault | ImportDeclaration | StatementNode;
