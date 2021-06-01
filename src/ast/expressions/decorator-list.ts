import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Decorator } from './decorators';

/**
 * Decorator list
 */

export interface DecoratorList extends SyntaxNode {
  readonly elements: Decorator[];
}

export function createDecoratorList(elements: Decorator[], start: number, end: number): DecoratorList {
  return {
    kind: SyntaxKind.DecoratorList,
    elements,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
