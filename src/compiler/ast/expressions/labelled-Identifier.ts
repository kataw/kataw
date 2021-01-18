import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * LabelIdentifier
 */
export interface LabelIdentifier extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createLabelIdentifier(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): LabelIdentifier {
  return {
    kind: NodeKind.LabelIdentifier,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
