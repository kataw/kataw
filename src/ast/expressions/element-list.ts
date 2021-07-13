import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SpreadElement } from './spread-element';
import { Elison } from './elison';
import { ExpressionNode } from '.';

/**
 * BindingElementList
 */

export type ListElements = Elison | ExpressionNode | SpreadElement;

export interface ElementList extends SyntaxNode {
  readonly elements: ListElements[];
  readonly trailingComma: boolean;
}

export function createElementList(
  elements: ListElements[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ElementList {
  return {
    kind: SyntaxKind.ElementList,
    elements,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
