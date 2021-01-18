import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions';

/**
 * JsxSpreadAttribute
 */

export interface JsxSpreadAttribute extends Node {
  readonly expression: Expression;
}

export function createJsxSpreadAttribute(expression: Expression, start: number, end: number): JsxSpreadAttribute {
  return {
    kind: NodeKind.JsxSpreadAttribute,
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
