import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Template tail
 */
export interface TemplateTail extends Node {
  readonly rawText: string;
  readonly text: string;
  readonly literal: boolean;
}

export function createTemplateTail(
  rawText: string,
  text: string,
  literal: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateTail {
  return {
    kind: NodeKind.TemplateTail,
    rawText,
    text,
    literal,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}
