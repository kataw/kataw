import { Expression } from '../expressions';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';
import { updateNode } from '../../utils';
import { DecoratorList } from '../expressions/decorator-list';

/**
 * Class expression.
 */
export interface ClassDeclaration extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters;
  readonly heritageClauses: Expression | null;
  readonly members: ClassElementList;
  readonly decorators: DecoratorList;
}

export function createClassDeclaration(
  // May be undefined in `export default class { ... }`.
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList,
  decorators: DecoratorList,
  flags: NodeFlags,
  isAbstract: boolean,
  start: number,
  end: number
): ClassDeclaration {
  return {
    kind: isAbstract ? NodeKind.AbstractClassDeclaration : NodeKind.ClassDeclaration,
    name,
    typeParameters,
    heritageClauses,
    members,
    decorators,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015 | (isAbstract ? TransformFlags.TypeScript : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassDeclaration(
  node: ClassDeclaration,
  isAbstract: boolean,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList,
  decorators: DecoratorList
): ClassDeclaration {
  return (
    node.name !== name || (node.kind !== NodeKind.AbstractClassDeclaration && isAbstract),
    node.typeParameters !== typeParameters || node.heritageClauses !== heritageClauses || node.members !== members
    || node.decorators !== decorators
      ? updateNode(
          createClassDeclaration(
            name,
            typeParameters,
            heritageClauses,
            members,
            decorators,
            node.flags,
            isAbstract,
            node.start,
            node.end
          ),
          node
        )
      : node
  );
}
