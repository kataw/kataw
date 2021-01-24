import { Node, NodeKind, NodeFlags, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from './assignment-expr';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { BindingIdentifier } from './binding-identifier';
import { TypeNode } from '../types';

/**
 * Formal parameter
 */

export interface FormalParameter extends Node {
  readonly ellipsis: boolean; // Present on rest parameter
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly accessModifiers: AccessModifiers;
}

export function createFormalParameter(
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  accessModifiers: AccessModifiers,
  flags: NodeFlags,
  start: number,
  end: number
): FormalParameter {
  return {
    kind: NodeKind.FormalParameter,
    ellipsis,
    binding,
    optional,
    type,
    initializer,
    accessModifiers,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.ES2015 |
      (ellipsis ? TransformFlags.RestOrSpread : TransformFlags.None) |
      (accessModifiers ? TransformFlags.TypeScript : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateFormalParameter(
  ellipsis: boolean,
  node: FormalParameter,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null
): FormalParameter {
  return node.binding !== binding ||
    node.ellipsis !== ellipsis ||
    node.optional !== optional ||
    node.initializer !== initializer ||
    node.type !== type
    ? updateNode(
        createFormalParameter(
          ellipsis,
          binding,
          optional,
          type,
          initializer,
          node.accessModifiers,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
