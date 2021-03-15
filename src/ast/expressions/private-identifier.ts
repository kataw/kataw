import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * PrivateIdentifier
 */
export interface PrivateIdentifier extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createPrivateIdentifier(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): PrivateIdentifier {
  return {
    kind: NodeKind.PrivateIdentifier,
    text,
    rawText,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ClassFields,
    start,
    end
  };
}
