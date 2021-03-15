import { Node, NodeKind, NodeFlags, TransformFlags, UniqueIdentifierFlags } from '../node';

/**
 * Dummy identifier
 */
export interface DummyIdentifier extends Node {
  readonly text: string;
  readonly start: number;
  readonly end: number;
}

export function createDummyIdentifier(start: number, end: number): DummyIdentifier {
  return {
    kind: NodeKind.DummyIdentifier,
    text: '',
    flags: NodeFlags.Synthetic | NodeFlags.HasErrors,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
