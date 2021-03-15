import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { Expression } from '../expressions';
import { ThisExpression } from '../expressions/this-expr';
import { JsxIdentifier } from './jsx-identifier';
import { updateNode } from '../../utils';

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
  flags: NodeFlags,
  start: number,
  end: number
): JsxTagNamePropertyAccess {
  return {
    kind: NodeKind.JsxTagNamePropertyAccess,
    member,
    expression,
    flags,
    symbol: null,
    transformFlags:
      expression.transformFlags |
      (member.kind === NodeKind.IdentifierName ? member.transformFlags : NodeFlags.None) |
      TransformFlags.Jsx,
    start,
    end
  };
}
export function updateJsxTagNamePropertyAccess(
  node: JsxTagNamePropertyAccess,
  member: Expression,
  expression: Expression | JsxIdentifier | ThisExpression
): JsxTagNamePropertyAccess {
  return node.member !== member || node.expression !== expression
    ? updateNode(createJsxTagNamePropertyAccess(member, expression, node.flags, node.start, node.end), node)
    : node;
}
