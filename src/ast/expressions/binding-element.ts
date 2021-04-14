import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Binding element
 */

export interface BindingElement extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | Identifier;
  readonly initializer: ExpressionNode | null;
}

export function createBindingElement(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): BindingElement {
  return {
    kind: SyntaxKind.BindingElement,
    ellipsisToken,
    binding,
    initializer,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
