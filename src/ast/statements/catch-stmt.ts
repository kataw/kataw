import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BlockStatement } from './block-stmt';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';
import { DummyIdentifier } from '../internal/dummy-identifier';

/**
 * CatchClause.
 */
export interface CatchClause extends SyntaxNode {
  readonly catchKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | DummyIdentifier | null;
  readonly block: BlockStatement;
}

export function createCatch(
  catchKeyword: SyntaxToken<TokenSyntaxKind>,
  catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | DummyIdentifier | null,
  block: BlockStatement,
  flags: NodeFlags,
  start: number,
  end: number
): CatchClause {
  return {
    kind: SyntaxKind.Catch,
    catchKeyword,
    catchParameter,
    block,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
