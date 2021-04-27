import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { StringLiteral } from '../expressions/string-literal';

/**
 * Jsx attributes list
 */

/* @internal */
export interface PrologueDirective extends SyntaxNode {
  readonly expression: StringLiteral;
}

/* @internal */
export function createPrologueDirective(expression: StringLiteral, start: number, end: number): PrologueDirective {
  return {
    kind: SyntaxKind.PrologueDirective,
    expression,
    flags: NodeFlags.None,
    start,
    end
  };
}
