import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * SymbolKeyword
 */

export type SymbolKeyword = Node;

export function createSymbolKeyword(flags: NodeFlags, start: number, end: number): SymbolKeyword {
  return {
    kind: NodeKind.SymbolKeyword,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
