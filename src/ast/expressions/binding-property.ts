import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BindingElement } from './binding-element';
import { SingleNameBinding } from './singleNameBinding';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { Identifier } from './identifier-expr';
import { NumericLiteral } from './numeric-literal';
import { BigIntLiteral } from './bigInt-literal';
import { StringLiteral } from './string-literal';
import { ComputedPropertyName } from './computed-property-name';
import { PrivateIdentifier } from './private-identifier';

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
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly key: PropertyKey;
  readonly value: BindingElement | SingleNameBinding;
}

export function createBindingProperty(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  key: PropertyKey,
  value: BindingElement | SingleNameBinding,
  start: number,
  end: number
): BindingProperty {
  return {
    kind: SyntaxKind.BindingProperty,
    ellipsisToken,
    key,
    value,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
