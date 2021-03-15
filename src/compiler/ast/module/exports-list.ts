import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';
import { ExportSpecifier } from './export-specifier';

export interface ExportsList extends Node {
  readonly specifiers: ExportSpecifier[];
}

export function createExportsList(
  specifiers: ExportSpecifier[],
  flags: NodeFlags,
  start: number,
  end: number
): ExportsList {
  return {
    kind: NodeKind.ExportsList,
    specifiers,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateExportsList(node: ExportsList, specifiers: ExportSpecifier[]): ExportsList {
  return node.specifiers !== specifiers
    ? updateNode(createExportsList(specifiers, node.flags, node.start, node.end), node)
    : node;
}
