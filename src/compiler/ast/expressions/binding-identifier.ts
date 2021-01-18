import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Binding identifier
 */
export interface BindingIdentifier extends Node {
  readonly text: string;
  readonly rawText: string;
}

export function createBindingIdentifier(
  text: string,
  rawText: string,
  flags: NodeFlags,
  start: number,
  end: number
): BindingIdentifier {
  return {
    kind: NodeKind.BindingIdentifier,
    text,
    rawText,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | TransformFlags.BindingPattern,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
