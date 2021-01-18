import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';

export interface ImportsList extends Node {
  readonly specifiers: any;
}

export function createImportsList(specifiers: any, flags: NodeFlags, start: number, end: number): ImportsList {
  return {
    kind: NodeKind.ImportsList,
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
