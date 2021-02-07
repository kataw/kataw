import { Expression } from '../expressions';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';
import { updateNode } from '../../utils';
import { DecoratorList } from '../expressions/decorator-list';
import { ImplementClauses } from '../types/implement-clauses';

/**
 * Class expression.
 */
export interface ClassDeclaration extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly classHeritage: Expression | null;
  readonly implementClauses: ImplementClauses;
  readonly members: ClassElementList;
  readonly decorators: DecoratorList;
}

export function createClassDeclaration(
  // May be undefined in `export default class { ... }`.
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses,
  members: ClassElementList,
  decorators: DecoratorList,
  flags: NodeFlags,
  start: number,
  end: number
): ClassDeclaration {
  return {
    kind: NodeKind.ClassDeclaration,
    name,
    typeParameters,
    classHeritage,
    implementClauses,
    members,
    decorators,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.ES2015 | (flags & NodeFlags.Abstract ? TransformFlags.TypeScript : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassDeclaration(
  node: ClassDeclaration,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses,
  members: ClassElementList,
  decorators: DecoratorList
): ClassDeclaration {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.classHeritage !== classHeritage ||
    node.implementClauses !== implementClauses ||
    node.members !== members ||
    node.decorators !== decorators
    ? updateNode(
        createClassDeclaration(
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
