import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from './identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '../types';

/**
 * Formal parameter
 */

export interface BindingElement extends SyntaxNode {
  readonly kind: SyntaxKind.BindingElement;
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly left: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly right: ExpressionNode | null; // Optional initializer
}

export function createBindingElement(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  left: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  right: ExpressionNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): BindingElement {
  return {
    kind: SyntaxKind.BindingElement,
    ellipsisToken,
    left,
    optionalToken,
    type,
    right,
    flags,
    start,
    end
  };
}
