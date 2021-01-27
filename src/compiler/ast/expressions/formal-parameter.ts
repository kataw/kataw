import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from './assignment-expr';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { BindingIdentifier } from './binding-identifier';
import { DecoratorList } from './decorator-list';
import { TypeNode } from '../types';
import { AccessModifiers } from '../types/access-modifiers';

/**
 * Formal parameter
 */

export interface FormalParameter extends Node {
  readonly ellipsis: boolean; // Present on rest parameter
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly decorators: DecoratorList | null; // Only for error recovery
  readonly accessModifiers: AccessModifiers;
}

export function createFormalParameter(
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList | null,
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
    decorators,
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
  initializer: AssignmentExpression | null,
  decorators: DecoratorList
): FormalParameter {
  return node.binding !== binding ||
    node.ellipsis !== ellipsis ||
    node.optional !== optional ||
    node.initializer !== initializer ||
    node.type !== type ||
    node.decorators !== decorators
    ? updateNode(
        createFormalParameter(
          ellipsis,
          binding,
          optional,
          type,
          initializer,
          decorators,
          node.accessModifiers,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
