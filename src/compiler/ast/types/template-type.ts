import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TemplateLiteralTypeSpan } from './template-type-span';
import { updateNode } from '../../utils';
import { TemplateTail } from '../expressions/template-tail';

/**
 * TemplateLiteralType
 */

export interface TemplateLiteralType extends Node {
  readonly spans: TemplateLiteralTypeSpan[];
  readonly tail: TemplateTail;
}

export function createTemplateLiteralType(
  spans: TemplateLiteralTypeSpan[],
  tail: TemplateTail,
  flags: NodeFlags,
  start: number,
  end: number
): TemplateLiteralType {
  return {
    kind: NodeKind.TemplateType,
    spans,
    tail,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTemplateLiteralType(
  node: TemplateLiteralType,
  spans: TemplateLiteralTypeSpan[],
  tail: TemplateTail
): TemplateLiteralType {
  return node.spans !== spans || node.tail !== tail
    ? updateNode(createTemplateLiteralType(spans, tail, node.flags, node.start, node.end), node)
    : node;
}
