import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * ConstructSignature
 */

export interface ConstructSignature extends Node {
  readonly typeParameters: TypeParameters;
  readonly accessModifiers: AccessModifiers;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructSignature(
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): ConstructSignature {
  return {
    kind: NodeKind.ConstructSignature,
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

export function updateConstructSignature(
  node: ConstructSignature,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null
): ConstructSignature {
  return node.typeParameters !== typeParameters || node.parameters !== parameters || node.returnType !== returnType
    ? updateNode(
        createConstructSignature(
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
