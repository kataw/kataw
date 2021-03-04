import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '.';
import { TemplateExpression } from './template-expression';

/**
 * Template span
 */
export interface TemplateSpan extends Node {
  readonly rawText: string;
  readonly text: string;
  readonly expression: Expression | null;
}

export function createTemplateSpan(
  rawText: string,
  text: string,
  expression: Expression | null,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateSpan {
  return {
    kind: NodeKind.TemplateSpan,
    rawText,
    text,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}

export function updateTemplateSpan(
  node: TemplateSpan,
  rawText: string,
  text: string,
  expression: Expression | null
): TemplateSpan {
  return node.rawText !== rawText || node.text !== text || node.expression !== expression
    ? updateNode(createTemplateSpan(rawText, text, expression, node.flags, node.start, node.end), node)
    : node;
}
