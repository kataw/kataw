import { Expression } from '../expressions';
import { BindingIdentifier } from '../expressions/binding-identifier';
import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ClassElementList } from '../expressions/class-element-list';
import { TypeParameters } from '../types/type-parameter-list';
import { updateNode } from '../../../visitor/common';

/**
 * Class expression.
 */
export interface ClassDeclaration extends Node {
  readonly name: BindingIdentifier | null;
  readonly typeParameters: TypeParameters;
  readonly heritageClauses: Expression | null;
  readonly members: ClassElementList;
  readonly isDeclared: boolean;
}

export function createClassDeclaration(
  // May be undefined in `export default class { ... }`.
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList,
  flags: NodeFlags,
  isDeclared: boolean,
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
    isDeclared,
    flags,
    intersects: false,
    transformFlags:
      TransformFlags.ES2015 |
      (isDeclared ? TransformFlags.TypeScript : TransformFlags.None) |
      (isAbstract ? TransformFlags.TypeScript : TransformFlags.None),
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateClassDeclaration(
  node: ClassDeclaration,
  isAbstract: boolean,
  isDeclared: boolean,
  name: BindingIdentifier | null,
  typeParameters: TypeParameters,
  heritageClauses: Expression | null,
  members: ClassElementList
): ClassDeclaration {
  return (
    node.name !== name || (node.kind !== NodeKind.AbstractClassDeclaration && isAbstract),
    node.isDeclared !== isDeclared,
    node.typeParameters !== typeParameters || node.heritageClauses !== heritageClauses || node.members !== members
      ? updateNode(
          createClassDeclaration(
            name,
            typeParameters,
            heritageClauses,
            members,
            node.flags,
            node.isDeclared,
            isAbstract,
            node.start,
            node.end
          ),
          node
        )
      : node
  );
}
