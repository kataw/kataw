import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
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
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
