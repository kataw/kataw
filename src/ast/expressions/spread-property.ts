import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * Spread property
 */
export interface SpreadProperty extends SyntaxNode {
  readonly argument: ExpressionNode;
}

export function createSpreadProperty(argument: ExpressionNode, start: number, end: number): SpreadProperty {
  return {
    kind: SyntaxKind.SpreadProperty,
    argument,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
