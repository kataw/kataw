import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { BindingPropertyList } from './binding-property-list';

/**
 * Object binding pattern.
 */
export interface ObjectBindingPattern extends SyntaxNode {
  readonly propertyList: BindingPropertyList;
}

export function createObjectBindingPattern(
  propertyList: BindingPropertyList,
  flags: NodeFlags,
  start: number,
  end: number
): ObjectBindingPattern {
  return {
    kind: SyntaxKind.ObjectBindingPattern,
    propertyList,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
