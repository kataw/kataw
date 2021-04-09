import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Decorator } from './decorators';

/**
 * Decorator list
 */

export interface DecoratorList extends SyntaxNode {
  readonly decoratorList: Decorator[];
}

export function createDecoratorList(decoratorList: Decorator[], start: number, end: number): DecoratorList {
  return {
    kind: SyntaxKind.DecoratorList,
    decoratorList,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
