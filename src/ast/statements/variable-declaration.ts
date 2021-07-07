import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
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
  readonly type: TypeNode | null;
  readonly initializer: ExpressionNode | null;
}

export function createVariableDeclaration(
  binding: ObjectBindingPattern | ArrayBindingPattern | Identifier | DummyIdentifier,
  type: TypeNode | null,
  initializer: ExpressionNode | null,
  start: number,
  end: number
): VariableDeclaration {
  return {
    kind: SyntaxKind.VariableDeclaration,
    binding,
    type,
    initializer,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.ShouldIndentIfInlining | TransformFlags.ArrowFolding,
    start,
    end
  };
}
