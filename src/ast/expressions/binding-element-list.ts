import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingElement } from './binding-element';
import { Elison } from './elison';

/**
 * BindingElementList
 */

export type BindingListElements = Elison | BindingElement;

export interface BindingElementList extends SyntaxNode {
  readonly elements: BindingListElements[];
  readonly trailingComma: boolean;
}

export function createBindingElementList(
  elements: BindingListElements[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): BindingElementList {
  return {
    kind: SyntaxKind.BindingElementList,
    elements,
    trailingComma,
    flags,
    start,
    end
  };
}
