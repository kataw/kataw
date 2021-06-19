import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '../expressions/index';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';
import { TypeNode } from '../types';

/**
 * Lexical binding
 */

export interface LexicalBinding extends SyntaxNode {
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier;
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createLexicalBinding(
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): LexicalBinding {
  return {
    kind: SyntaxKind.LexicalBinding,
    binding,
    type,
    initializer,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
