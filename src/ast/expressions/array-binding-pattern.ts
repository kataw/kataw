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
  flags: NodeFlags,
  start: number,
  end: number
): ArrayBindingPattern {
  return {
    kind: SyntaxKind.ArrayBindingPattern,
    elementList,
    flags,
    start,
    end
  };
}
