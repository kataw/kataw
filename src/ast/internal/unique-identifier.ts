import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

export const enum UniqueIdentifierFlags {
  None = 0,
  Auto = 1,
  Loop = 2,
  Unique = 3,
  Node = 4,
  KindMask = 7,
  ReservedInNestedScopes = 1 << 3,
  Optimistic = 1 << 4
}

/**
 * Unique identifier
 */
export interface UniqueIdentifier extends SyntaxNode {
  readonly uniqueFlags: UniqueIdentifierFlags;
  readonly uniqueId: number;
}

export function createUniqueIdentifier(
  uniqueFlags: UniqueIdentifierFlags,
  uniqueId: number,
  reservedInNestedScopes?: boolean
): UniqueIdentifier {
  return {
    kind: SyntaxKind.UniqueIdentifier,
    uniqueFlags: reservedInNestedScopes ? uniqueFlags | UniqueIdentifierFlags.ReservedInNestedScopes : uniqueFlags,
    uniqueId,
    flags: NodeFlags.Synthetic,
    start: -1,
    end: -1
  };
}
