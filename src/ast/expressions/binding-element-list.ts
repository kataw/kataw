import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ArrayBindingElement } from './array-binding-element';
import { OmittedExpression } from './omitted-expr';

/**
 * BindingElementList
 */

export type BindingListElements = OmittedExpression | ArrayBindingElement;

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
