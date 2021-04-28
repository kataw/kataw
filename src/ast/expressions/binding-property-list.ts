import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { BindingProperty } from './binding-property';
import { BindingElement } from './binding-element';

/**
 * BindingPropertyList
 */

export type BindingProperties = BindingElement | BindingProperty;

export interface BindingPropertyList extends SyntaxNode {
  readonly properties: BindingProperties[];
  readonly multiline: boolean;
  readonly trailingComma: boolean;
}

export function createBindingPropertyList(
  properties: BindingProperties[],
  multiline: boolean,
  trailingComma: boolean,
  start: number,
  end: number
): BindingPropertyList {
  return {
    kind: SyntaxKind.BindingPropertyList,
    properties,
    multiline,
    trailingComma,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
