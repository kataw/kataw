import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { SpreadElement } from './spread-element';
import { AssignmentExpression } from './assignment-expr';

export type ArgumentListElement = SpreadElement | AssignmentExpression;

/**
 * Argument list
 */
export interface ArgumentList extends Node {
  readonly elements: ArgumentListElement[];
  readonly trailingComma: boolean;
}

export function createArgumentList(
  elements: ArgumentListElement[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArgumentList {
  return {
    kind: NodeKind.ArgumentList,
    elements,
    trailingComma,
    transformFlags: TransformFlags.None,
    flags,
    intersects: false,
    start,
    end
  };
}

export function updateArgumentList(node: ArgumentList, elements: ArgumentListElement[]): ArgumentList {
  return node.elements !== elements
    ? updateNode(createArgumentList(elements, node.trailingComma, node.flags, node.start, node.end), node)
    : node;
}
