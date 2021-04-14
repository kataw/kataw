import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingPropertyList } from './binding-property-list';

/**
 * Object binding pattern.
 */
export interface ObjectBindingPattern extends SyntaxNode {
  readonly propertyList: BindingPropertyList;
}

export function createObjectBindingPattern(
  propertyList: BindingPropertyList,
  start: number,
  end: number
): ObjectBindingPattern {
  return {
    kind: SyntaxKind.ObjectBindingPattern,
    propertyList,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
