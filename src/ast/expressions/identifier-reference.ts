import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Identifier reference.
 */
export interface IdentifierReference extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createIdentifierReference(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): IdentifierReference {
  return {
    kind: NodeKind.IdentifierReference,
    text,
    rawText,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
