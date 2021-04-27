import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
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
    flags,
    start,
    end
  };
}
