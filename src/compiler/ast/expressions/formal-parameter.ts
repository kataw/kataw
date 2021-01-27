import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from './assignment-expr';
import { ArrayBindingPattern } from './array-binding-pattern';
import { ObjectBindingPattern } from './object-binding-pattern';
import { BindingIdentifier } from './binding-identifier';
import { DecoratorList } from './decorator-list';
import { TypeNode } from '../types';
import { AccessModifier } from '../types/access-modifier';

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
  readonly accessModifier: AccessModifier | null;
}

export function createFormalParameter(
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList | null,
  accessModifier: AccessModifier | null,
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
    accessModifier,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.ES2015 |
      (ellipsis ? TransformFlags.RestOrSpread : TransformFlags.None) |
      (accessModifier ? TransformFlags.TypeScript : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateFormalParameter(
  node: FormalParameter,
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  decorators: DecoratorList,
  accessModifier: AccessModifier | null
): FormalParameter {
  return node.binding !== binding ||
    node.ellipsis !== ellipsis ||
    node.optional !== optional ||
    node.initializer !== initializer ||
    node.type !== type ||
    node.decorators !== decorators ||
    node.accessModifier !== accessModifier
    ? updateNode(
        createFormalParameter(
          ellipsis,
          binding,
          optional,
          type,
          initializer,
          decorators,
          accessModifier,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
