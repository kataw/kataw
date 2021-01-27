import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { TypeNode } from '../types';
import { AccessModifier } from './access-modifier';

/**
 * ParameterDeclaration
 */

export interface ParameterDeclaration extends Node {
  readonly ellipsis: boolean; // Present on rest parameter
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly accessModifier: AccessModifier | null;
}

export function createParameterDeclaration(
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  accessModifier: AccessModifier | null,
  flags: NodeFlags,
  start: number,
  end: number
): ParameterDeclaration {
  return {
    kind: NodeKind.ParameterDeclaration,
    ellipsis,
    binding,
    optional,
    type,
    initializer,
    accessModifier,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | (ellipsis ? TransformFlags.RestOrSpread : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateParameterDeclaration(
  node: ParameterDeclaration,
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  accessModifier: AccessModifier | null
): ParameterDeclaration {
  return node.ellipsis !== ellipsis ||
    node.binding !== binding ||
    node.optional !== optional ||
    node.type !== type ||
    node.initializer !== initializer ||
    node.accessModifier !== accessModifier
    ? updateNode(
        createParameterDeclaration(
          ellipsis,
          binding,
          optional,
          type,
          initializer,
          accessModifier,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
