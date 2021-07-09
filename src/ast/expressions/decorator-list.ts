import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
