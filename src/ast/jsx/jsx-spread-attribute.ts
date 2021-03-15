import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions';
import { updateNode } from '../../utils';

/**
 * JsxSpreadAttribute
 */

export interface JsxSpreadAttribute extends Node {
  readonly expression: Expression;
}

export function createJsxSpreadAttribute(
  expression: Expression,
  flags: NodeFlags,
  start: number,
  end: number
): JsxSpreadAttribute {
  return {
    kind: NodeKind.JsxSpreadAttribute,
    expression,
    flags,
    symbol: null,
    transformFlags: expression.transformFlags | TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute {
  return node.expression !== expression
    ? updateNode(createJsxSpreadAttribute(expression, node.flags, node.start, node.end), node)
    : node;
}
