import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { Identifier } from './identifier-expr';
import { TypeNode } from '../types';
import { DummyIdentifier } from '../internal/dummy-identifier';

/**
 * Formal parameter
 */

export interface FormalParameter extends SyntaxNode {
  readonly ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createFormalParameter(
  ellipsisToken: SyntaxToken<TokenSyntaxKind> | null,
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): FormalParameter {
  return {
    kind: SyntaxKind.FormalParameter,
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
