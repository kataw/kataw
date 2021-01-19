import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { StringLiteral } from '../expressions/string-literal';

/**
 * Prologue directive
 */

  /* @internal */
export interface PrologueDirective extends Node {
  readonly expression: StringLiteral;
}

  /* @internal */
export function createPrologueDirective(
  expression: StringLiteral,
  start: number,
  end: number
): PrologueDirective {
  return {
    kind: NodeKind.PrologueDirective,
    expression,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
