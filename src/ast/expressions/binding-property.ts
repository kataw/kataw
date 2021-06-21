import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from './';
import { BindingElement } from './binding-element';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Identifier } from './identifier-expr';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './big-int-literal';
import { StringLiteral } from './string-literal';
import { ComputedPropertyName } from './computed-property-name';
import { PrivateIdentifier } from './private-identifier';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';

/**
 * Binding property
 */

export type PropertyKey =
  | DummyIdentifier
  | Identifier
  | NumericLiteral
  | BigIntLiteral
  | StringLiteral
  | ComputedPropertyName
  | PrivateIdentifier;

export interface BindingProperty extends SyntaxNode {
  readonly key: PropertyKey;
  readonly value: ArrayBindingPattern | ObjectBindingPattern | BindingElement;
  readonly initializer: ExpressionNode | null;
}

export function createBindingProperty(
  key: PropertyKey,
  value: ArrayBindingPattern | ObjectBindingPattern | BindingElement,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): BindingProperty {
  return {
    kind: SyntaxKind.BindingProperty,
    key,
    value,
    initializer,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
