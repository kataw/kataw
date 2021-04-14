import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * Spread element
 */
export interface SpreadElement extends SyntaxNode {
  readonly argument: ExpressionNode;
}

export function createSpreadElement(argument: ExpressionNode, start: number, end: number): SpreadElement {
  return {
    kind: SyntaxKind.SpreadElement,
    argument,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
