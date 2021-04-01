import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
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
  start: number,
  end: number
): BindingElementList {
  return {
    kind: SyntaxKind.BindingElementList,
    elements,
    trailingComma,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
