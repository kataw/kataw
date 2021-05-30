import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from './identifier-expr';
import { TypeNode } from '../types';

/**
 * Formal parameter
 */

export interface BindingElement extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly left: ObjectBindingPattern | ArrayBindingPattern | Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly right: ExpressionNode | null;
}

export function createBindingElement(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  left: ObjectBindingPattern | ArrayBindingPattern | Identifier,
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
