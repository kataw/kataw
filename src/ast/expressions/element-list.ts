import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SpreadElement } from './spread-element';
import { OmittedExpression } from './omitted-expr';
import { ExpressionNode } from '.';

/**
 * BindingElementList
 */

export type ListElements = OmittedExpression | ExpressionNode | SpreadElement;

export interface ElementList extends SyntaxNode {
  readonly elements: ListElements[];
  readonly trailingComma: boolean;
}

export function createElementList(
  elements: ListElements[],
  trailingComma: boolean,
  start: number,
  end: number
): ElementList {
  return {
    kind: SyntaxKind.ElementList,
    elements,
    trailingComma,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
