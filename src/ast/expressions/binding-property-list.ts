import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingProperty } from './binding-property';

/**
 * BindingPropertyList
 */

export interface BindingPropertyList extends SyntaxNode {
  readonly properties: BindingProperty[];
  readonly trailingComma: boolean;
}

export function createBindingPropertyList(
  properties: BindingProperty[],
  flags: NodeFlags,
  trailingComma: boolean,
  start: number,
  end: number
): BindingPropertyList {
  return {
    kind: SyntaxKind.BindingPropertyList,
    properties,
    trailingComma,
    flags,
    start,
    end
  };
}
