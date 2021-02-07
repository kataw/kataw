import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';

/**
 * ConstructorType
 */

export interface ConstructorType extends Node {
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructorType(
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): ConstructorType {
  return {
    kind: flags & NodeFlags.Abstract ? NodeKind.AbstractConstructorType : NodeKind.ConstructorType,
    accessModifier,
    typeParameters,
    parameters,
    returnType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateConstructorType(
  accessModifier: AccessModifier | null,
  node: ConstructorType,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode
): ConstructorType {
  return node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createConstructorType(accessModifier, typeParameters, parameters, returnType, node.flags, node.start, node.end),
        node
      )
    : node;
}
