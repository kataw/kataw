import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { BindingProperty } from './binding-property';
import { BindingElement } from './binding-element';
import { Identifier } from './identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

/**
 * BindingPropertyList
 */

export type BindingProperties = BindingProperty | BindingElement | Identifier | DummyIdentifier;

export interface BindingPropertyList extends SyntaxNode {
  readonly properties: BindingProperties[];
  readonly trailingComma: boolean;
}

export function createBindingPropertyList(
  properties: BindingProperties[],
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
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
