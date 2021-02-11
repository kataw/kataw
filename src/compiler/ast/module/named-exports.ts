import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';
import { ExportsList } from './exports-list';

export interface NamedExports extends Node {
  readonly exportsList: ExportsList;
}

export function createNamedExports(
  exportsList: ExportsList,
  flags: NodeFlags,
  start: number,
  end: number
): NamedExports {
  return {
    kind: NodeKind.NamedExports,
    exportsList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateNamedExports(node: NamedExports, exportsList: ExportsList): NamedExports {
  return node.exportsList !== exportsList
    ? updateNode(createNamedExports(exportsList, node.flags, node.start, node.end), node)
    : node;
}
