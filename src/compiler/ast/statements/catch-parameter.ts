import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { TypeNode } from '../types';

/**
 * Catch parameter
 */

export interface CatchParameter extends Node {
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
}

export function createCatchParameter(
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  flags: NodeFlags,
  start: number,
  end: number
): CatchParameter {
  return {
    kind: NodeKind.CatchParameter,
    binding,
    type,
    initializer,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateCatchParameter(
  node: CatchParameter,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  type: TypeNode | null,
  initializer: AssignmentExpression | null
): CatchParameter {
  return node.binding !== binding || node.initializer !== initializer || node.type !== type
    ? updateNode(createCatchParameter(binding, type, initializer, node.flags, node.start, node.end), node)
    : node;
}
