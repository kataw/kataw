import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';
import { ImportSpecifier } from './import-specifier';

export interface ImportsList extends Node {
  readonly specifiers: ImportSpecifier[];
}

export function createImportsList(
  specifiers: ImportSpecifier[],
  flags: NodeFlags,
  start: number,
  end: number
): ImportsList {
  return {
    kind: NodeKind.ImportsList,
    specifiers,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateImportsList(node: ImportsList, specifiers: ImportSpecifier[]): ImportsList {
  return node.specifiers !== specifiers
    ? updateNode(createImportsList(specifiers, node.flags, node.start, node.end), node)
    : node;
}
