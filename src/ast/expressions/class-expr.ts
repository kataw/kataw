import { Expression } from '.';
import { BindingIdentifier } from './binding-identifier';
import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';
import { ImplementClauses } from '../types/implement-clauses';
import { DecoratorList } from './decorator-list';

/**
 * Class expression.
 */
export interface ClassExpression extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly classHeritage: Expression | null;
  readonly implementClauses: ImplementClauses | null;
  readonly members: ClassElementList;
  readonly decorators: DecoratorList | null;
}

export function createClassExpression(
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses | null,
  members: ClassElementList,
  decorators: DecoratorList | null,
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
    decorators,
    flags,
    symbol: null,
    transformFlags: TransformFlags.ES2015,
    start,
    end
  };
}

export function updateClassExpression(
  node: ClassExpression,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses | null,
  members: ClassElementList,
  decorators: DecoratorList | null
): ClassExpression {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.classHeritage !== classHeritage ||
    node.implementClauses !== implementClauses ||
    node.members !== members ||
    node.decorators !== decorators
    ? updateNode(
        createClassExpression(
          name,
          typeParameters,
          classHeritage,
          implementClauses,
          members,
          decorators,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
