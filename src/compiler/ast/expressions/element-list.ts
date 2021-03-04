import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '.';
import { SpreadElement } from './spread-element';
import { OmittedExpression } from './omitted-expr';

export type ElementListElements = OmittedExpression | SpreadElement | Expression;

/**
 * Array element list
 */
export interface ElementList extends Node {
  readonly elements: ElementListElements[];
  readonly trailingComma: boolean;
  /* @internal */
  readonly multiline: boolean;
}

export function createElementList(
  elements: ElementListElements[],
  trailingComma: boolean,
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ElementList {
  return {
    kind: NodeKind.ElementList,
    elements,
    trailingComma,
    multiline,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateElementList(
  node: ElementList,
  trailingComma: boolean,
  multiline: boolean,
  elements: ElementListElements[]
): ElementList {
  return node.trailingComma !== trailingComma || node.multiline !== multiline || node.elements !== elements
    ? updateNode(createElementList(elements, trailingComma, multiline, node.flags, node.start, node.end), node)
    : node;
}
