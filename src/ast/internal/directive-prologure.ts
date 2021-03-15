import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';

/**
 * Jsx attributes list
 */

/* @internal */
export interface PrologueDirective extends Node {
  readonly expression: StringLiteral;
}

/* @internal */
export function createPrologueDirective(expression: StringLiteral, start: number, end: number): PrologueDirective {
  return {
    kind: NodeKind.PrologueDirective,
    expression,
    flags: NodeFlags.None,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
