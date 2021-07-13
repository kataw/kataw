import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { BindingElement } from './binding-element';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from './identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Elison } from './elison';

/**
 * BindingElementList
 */

export type BindingListElements =
  | Elison
  | BindingElement
  | ObjectBindingPattern
  | ArrayBindingPattern
  | Identifier
  | DummyIdentifier;

export interface BindingElementList extends SyntaxNode {
  readonly elements: BindingListElements[];
  readonly trailingComma: boolean;
}

export function createBindingElementList(
  elements: BindingListElements[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): BindingElementList {
  return {
    kind: SyntaxKind.BindingElementList,
    elements,
    trailingComma,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
