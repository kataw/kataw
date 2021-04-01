import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from './identifier-expr';
import { TypeNode } from '../types';

/**
 * Formal parameter
 */

export interface ArrayBindingElement extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | Identifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createArrayBindingElement(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): ArrayBindingElement {
  return {
    kind: SyntaxKind.ArrayBindingElement,
    ellipsisToken,
    binding,
    optionalToken,
    type,
    initializer,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
