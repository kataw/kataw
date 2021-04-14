import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * Decorator
 */

export interface Decorator extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createDecorator(expression: ExpressionNode, flags: NodeFlags, start: number, end: number): Decorator {
  return {
    kind: SyntaxKind.Decorator,
    expression,
    flags,
    start,
    end
  };
}
