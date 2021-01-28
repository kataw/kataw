import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
import { updateNode } from '../../utils';
import { TemplateLiteralType } from './template-type';

/**
 * TemplateLiteralTypeSpan
 */

export interface TemplateLiteralTypeSpan extends Node {
  readonly type: TypeNode;
  readonly rawText: string;
  readonly text: string;
  /* @internal */
  readonly parent: TemplateLiteralType | null;
}

export function createTemplateLiteralTypeSpan(
  type: TypeNode,
  rawText: string,
  text: string,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateLiteralTypeSpan {
  return {
    kind: NodeKind.TemplateTypeSpan,
    type,
    rawText,
    text,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTemplateLiteralTypeSpan(
  node: TemplateLiteralTypeSpan,
  type: TypeNode,
  rawText: string,
  text: string
): TemplateLiteralTypeSpan {
  return node.type !== type || node.rawText !== rawText || node.text !== text
    ? updateNode(createTemplateLiteralTypeSpan(type, rawText, text, node.flags, node.start, node.end), node)
    : node;
}
