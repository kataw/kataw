import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

export interface ExportsList extends Node {
  readonly specifiers: any;
}

export function createExportsList(specifiers: any, flags: NodeFlags, start: number, end: number): ExportsList {
  return {
    kind: NodeKind.ExportsList,
    specifiers,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
