import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExportsList } from './exports-list';

export interface NamedExports extends SyntaxNode {
  readonly exportsList: ExportsList;
}

export function createNamedExports(
  exportsList: ExportsList,
  flags: NodeFlags,
  start: number,
  end: number
): NamedExports {
  return {
    kind: SyntaxKind.NamedExports,
    exportsList,
    autofix: AutoFix.NotFixable,
    flags,
    start,
    end
  };
}
