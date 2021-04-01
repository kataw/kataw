import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExportSpecifier } from './export-specifier';

export interface ExportsList extends SyntaxNode {
  readonly specifiers: ExportSpecifier[];
}

export function createExportsList(specifiers: ExportSpecifier[], start: number, end: number): ExportsList {
  return {
    kind: SyntaxKind.ExportsList,
    specifiers,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
