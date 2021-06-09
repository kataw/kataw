import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions/index';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '../types';

/**
 * Variable declaration
 */

export interface VariableDeclaration extends SyntaxNode {
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier;
  readonly optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  readonly type: TypeNode | null; // Optional type annotation
  readonly initializer: ExpressionNode | null; // Optional initializer
}

export function createVariableDeclaration(
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier,
  optionalToken: SyntaxToken<TokenSyntaxKind> | null,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): VariableDeclaration {
  return {
    kind: SyntaxKind.VariableDeclaration,
    binding,
    optionalToken,
    type,
    initializer,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
