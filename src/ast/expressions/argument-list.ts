import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { SpreadElement } from './spread-element';

export type ArgumentListElement = SpreadElement | ExpressionNode;

/**
 * Argument list
 */

export interface ArgumentList extends SyntaxNode {
  readonly elements: ArgumentListElement[];
  readonly trailingComma: boolean;
}

export function createArgumentList(
  elements: ArgumentListElement[],
  trailingComma: boolean,
  start: number,
  end: number
): ArgumentList {
  return {
    kind: SyntaxKind.ArgumentList,
    elements,
    trailingComma,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
