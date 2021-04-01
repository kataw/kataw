import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Block } from './block';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { Identifier } from '../expressions/identifier-expr';

/**
 * CatchClause.
 */
export interface CatchClause extends SyntaxNode {
  readonly catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null;
  readonly block: Block;
}

export function createCatch(
  catchParameter: ArrayBindingPattern | ObjectBindingPattern | Identifier | null,
  block: Block,
  start: number,
  end: number
): CatchClause {
  return {
    kind: SyntaxKind.Catch,
    catchParameter,
    block,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
