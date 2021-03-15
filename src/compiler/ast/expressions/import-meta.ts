import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Import Meta
 */
export type ImportMeta = Node;

export function createImportMeta(flags: NodeFlags, start: number, end: number): ImportMeta {
  return {
    kind: NodeKind.ImportMeta,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2020,
    start,
    end
  };
}
