import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { TypeNode } from './';

/**
 * IndexedAccessType
 */

export interface IndexedAccessType extends SyntaxNode {
  readonly objectType: TypeNode;
  readonly indexType: TypeNode;
}

export function createIndexedAccessType(
  objectType: TypeNode,
  indexType: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): IndexedAccessType {
  return {
    kind: SyntaxKind.IndexedAccessType,
    objectType,
    indexType,
    flags,
    start,
    end
  };
}
