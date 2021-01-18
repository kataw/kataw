import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions';
import { ThisExpression } from '../expressions/this-expr';
import { JsxIdentifier } from './jsx-identifier';

/**
 * JsxTagNamePropertyAccess
 */

export interface JsxTagNamePropertyAccess extends Node {
  readonly member: Expression;
  readonly expression: Expression | JsxIdentifier | ThisExpression;
}

export function createJsxTagNamePropertyAccess(
  member: Expression,
  expression: Expression | JsxIdentifier | ThisExpression,
  start: number,
  end: number
): JsxTagNamePropertyAccess {
  return {
    kind: NodeKind.JsxTagNamePropertyAccess,
    member,
    expression,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: expression.transformFlags | TransformFlags.Jsx,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
