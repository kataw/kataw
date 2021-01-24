import { Expression } from './';
import { UniqueIdentifier } from '../internal/unique-identifier';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

export type AssignOp = '=' | '+=' | '-=' | '*=' | '/=' | '%=' | '<<=' | '>>=' | '>>>=' | '|=' | '^=' | '&=' | '**=';

export type LogicalOp = '||=' | '&&=' | '??=';

/**
 * Assignment expression.
 */
export interface AssignmentExpression extends Node {
  readonly left: Expression;
  readonly operator: AssignOp | LogicalOp;
  readonly right: Expression | UniqueIdentifier;
}

export function createAssignmentExpression(
  left: Expression,
  operator: AssignOp | LogicalOp,
  right: Expression | UniqueIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): AssignmentExpression {
  return {
    kind: NodeKind.AssignmentExpression,
    left,
    operator,
    right,
    flags,
    intersects: false,
    transformFlags:
      operator === '**='
        ? TransformFlags.ES2016
        : operator === '||=' || operator === '&&=' || operator === '??='
        ? TransformFlags.ES2016 | TransformFlags.ES2020
        : TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateAssignmentExpression(
  node: AssignmentExpression,
  left: Expression,
  right: Expression | UniqueIdentifier
): AssignmentExpression {
  return node.left !== left || node.right !== right
    ? updateNode(createAssignmentExpression(left, node.operator, right, node.flags, node.start, node.end), node)
    : node;
}
