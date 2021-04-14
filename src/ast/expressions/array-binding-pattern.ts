import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingElementList } from './binding-element-list';

/**
 * Array binding pattern
 */
export interface ArrayBindingPattern extends SyntaxNode {
  readonly elementList: BindingElementList;
}

export function createArrayBindingPattern(
  elementList: BindingElementList,
  start: number,
  end: number
): ArrayBindingPattern {
  return {
    kind: SyntaxKind.ArrayBindingPattern,
    elementList,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
