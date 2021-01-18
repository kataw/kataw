import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { TemplateExpression } from './template-expression';

/**
 * Template tail
 */
export interface TemplateTail extends Node {
  readonly rawText: string;
  readonly text: string;
  /* @internal */
  readonly parent: TemplateExpression | null;
}

export function createTemplateTail(
  rawText: string,
  text: string,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateTail {
  return {
    kind: NodeKind.TemplateTail,
    rawText,
    text,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
