import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Block } from './block';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';

/**
 * CatchClause.
 */
export interface CatchClause extends SyntaxNode {
  readonly catchKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null;
  readonly block: Block;
}

export function createCatch(
  catchKeyword: SyntaxToken<TokenSyntaxKind>,
  catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null,
  block: Block,
  start: number,
  end: number
): CatchClause {
  return {
    kind: SyntaxKind.Catch,
    catchKeyword,
    catchParameter,
    block,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
