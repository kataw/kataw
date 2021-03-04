import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * IdentifierName
 */
export interface IdentifierName extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createIdentifierName(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): IdentifierName {
  return {
    kind: NodeKind.IdentifierName,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
