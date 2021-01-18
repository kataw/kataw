import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions/index';

/**
 * JsxMemberExpression
 */

export interface JsxMemberExpression extends Node {
  readonly ellipsis: boolean;
  readonly expression: Expression | null;
}

export function createJsxMemberExpression(
  ellipsis: boolean,
  expression: Expression | null,
  start: number,
  end: number
): JsxMemberExpression {
  return {
    kind: NodeKind.JsxMemberExpression,
    ellipsis,
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
