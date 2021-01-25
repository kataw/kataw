import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * ConstructorType
 */

export interface ConstructorType extends Node {
  readonly accessModifiers: AccessModifiers;
  readonly typeParameters: TypeParameters;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructorType(
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): ConstructorType {
  return {
    kind: flags & NodeFlags.Abstract ? NodeKind.AbstractConstructorType : NodeKind.ConstructorType,
    accessModifiers,
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
  node: ConstructorType,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode
): ConstructorType {
  return node.typeParameters !== typeParameters || node.parameters !== parameters || node.returnType !== returnType
    ? updateNode(
        createConstructorType(
          node.accessModifiers,
          typeParameters,
          parameters,
          returnType,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
