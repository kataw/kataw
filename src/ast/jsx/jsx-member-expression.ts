import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions/index';
import { updateNode } from '../../utils';

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
  flags: NodeFlags,
  start: number,
  end: number
): JsxMemberExpression {
  return {
    kind: NodeKind.JsxMemberExpression,
    ellipsis,
    expression,
    flags,
    symbol: null,
    transformFlags: TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxMemberExpression(
  node: JsxMemberExpression,
  expression: Expression | null
): JsxMemberExpression {
  return node.expression !== expression
    ? updateNode(createJsxMemberExpression(node.ellipsis, expression, node.flags, node.start, node.end), node)
    : node;
}
