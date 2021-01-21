import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { ImportsList } from './imports-list';

export interface NamedImports extends Node {
  readonly importsList: ImportsList;
}

export function createNamedImports(
  importsList: ImportsList,
  flags: NodeFlags,
  start: number,
  end: number
): NamedImports {
  return {
    kind: NodeKind.NamedImports,
    importsList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateNamedImports(node: NamedImports, importsList: ImportsList): NamedImports {
  return node.importsList !== importsList
    ? updateNode(createNamedImports(importsList, node.flags, node.start, node.end), node)
    : node;
}
