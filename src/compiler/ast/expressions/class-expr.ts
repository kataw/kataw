import { Expression } from '.';
import { BindingIdentifier } from './binding-identifier';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '../types';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';
import { ImplementClauses } from '../types/implement-clauses';

/**
 * Class expression.
 */
export interface ClassExpression extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters;
  readonly classHeritage: Expression | null;
  readonly implementClauses: ImplementClauses;
  readonly members: ClassElementList;
}

export function createClassExpression(
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses,
  members: ClassElementList,
  flags: NodeFlags,
  start: number,
  end: number
): ClassExpression {
  return {
    kind: NodeKind.ClassExpression,
    name,
    typeParameters,
    classHeritage,
    implementClauses,
    members,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassExpression(
  node: ClassExpression,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses,
  members: ClassElementList
): ClassExpression {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.classHeritage !== classHeritage ||
    node.implementClauses !== implementClauses ||
    node.members !== members
    ? updateNode(
        createClassExpression(
          name,
          typeParameters,
          classHeritage,
          implementClauses,
          members,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
