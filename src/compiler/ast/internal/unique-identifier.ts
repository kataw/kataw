import { Node, NodeKind, NodeFlags, TransformFlags, UniqueIdentifierFlags } from '../node';

/**
 * Unique identifier
 */
export interface UniqueIdentifier extends Node {
  readonly uniqueFlags: UniqueIdentifierFlags;
  readonly uniqueId: number;
}

export function createUniqueIdentifier(
  uniqueFlags: UniqueIdentifierFlags,
  uniqueId: number,
  reservedInNestedScopes?: boolean
): UniqueIdentifier {
  return {
    kind: NodeKind.UniqueIdentifier,
    uniqueFlags: reservedInNestedScopes ? uniqueFlags | UniqueIdentifierFlags.ReservedInNestedScopes : uniqueFlags,
    uniqueId,
    flags: NodeFlags.Synthetic,
    symbol: null,
    transformFlags: TransformFlags.None,
    start: -1,
    end: -1
  };
}
