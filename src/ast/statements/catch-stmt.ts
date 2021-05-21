import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BlockStatement } from './block-stmt';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';
import { ExpressionNode } from '../expressions';

/**
 * CatchClause.
 */
export interface CatchClause extends SyntaxNode {
  readonly catchKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null;
  /* error recovery */
  readonly initializer: ExpressionNode | null;
  readonly block: BlockStatement;
}

export function createCatch(
  catchKeyword: SyntaxToken<TokenSyntaxKind>,
  catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null,
  initializer: ExpressionNode | null,
  block: BlockStatement,
  start: number,
  end: number
): CatchClause {
  return {
    kind: SyntaxKind.Catch,
    catchKeyword,
    catchParameter,
    initializer,
    block,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
