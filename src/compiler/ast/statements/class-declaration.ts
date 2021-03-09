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
  readonly implementClauses: ImplementClauses | null;
  readonly members: ClassElementList;
  readonly decorators: DecoratorList | null;
  readonly isAbstract: boolean;
}

export function createClassDeclaration(
  // May be undefined in `export default class { ... }`.
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses | null,
  members: ClassElementList,
  decorators: DecoratorList | null,
  isAbstract: boolean,
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
    isAbstract,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.ES2015 | (flags & NodeFlags.Abstract ? TransformFlags.TypeScript : TransformFlags.None),
    start,
    end
  };
}

export function updateClassDeclaration(
  node: ClassDeclaration,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters | null,
  classHeritage: Expression | null,
  implementClauses: ImplementClauses | null,
  members: ClassElementList,
  decorators: DecoratorList | null,
  isAbstract: boolean
): ClassDeclaration {
  return node.name !== name ||
    node.typeParameters !== typeParameters ||
    node.classHeritage !== classHeritage ||
    node.implementClauses !== implementClauses ||
    node.members !== members ||
    node.decorators !== decorators ||
    node.isAbstract !== isAbstract
    ? updateNode(
        createClassDeclaration(
          name,
          typeParameters,
          classHeritage,
          implementClauses,
          members,
          decorators,
          isAbstract,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
