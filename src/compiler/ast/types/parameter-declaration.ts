import { Node, NodeKind, NodeFlags, TransformFlags, AccessModifiers } from '../node';
import { AssignmentExpression } from '../expressions/assignment-expr';
import { ArrayBindingPattern } from '../expressions/array-binding-pattern';
import { ObjectBindingPattern } from '../expressions/object-binding-pattern';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { TypeNode } from '../types';

/**
 * ParameterDeclaration
 */

export interface ParameterDeclaration extends Node {
  readonly ellipsis: boolean; // Present on rest parameter
  readonly binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier;
  readonly optional: boolean;
  readonly type: TypeNode | null;
  readonly initializer: AssignmentExpression | null;
  readonly accessModifiers: AccessModifiers;
}

export function createParameterDeclaration(
  ellipsis: boolean,
  binding: ObjectBindingPattern | ArrayBindingPattern | BindingIdentifier,
  optional: boolean,
  type: TypeNode | null,
  initializer: AssignmentExpression | null,
  accessModifiers: AccessModifiers,
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
    accessModifiers,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | (ellipsis ? TransformFlags.RestOrSpread : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}
