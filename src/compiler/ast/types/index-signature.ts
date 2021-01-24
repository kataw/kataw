import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { Parameters } from './parameters';
import { TypeParameters } from './type-parameter-list';

/**
 * IndexSignature
 */

export interface IndexSignature extends Node {
  readonly typeParameters: TypeParameters;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifiers: AccessModifiers;
}

export function createIndexSignature(
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null,
  readonly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): IndexSignature {
  return {
    kind: NodeKind.IndexSignature,
    accessModifiers,
    typeParameters,
    parameters,
    returnType,
    readonly,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateIndexSignature(
  node: IndexSignature,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null
): IndexSignature {
  return node.typeParameters !== typeParameters || node.parameters !== parameters || node.returnType !== returnType
    ? updateNode(
        createIndexSignature(
          node.accessModifiers,
          typeParameters,
          parameters,
          returnType,
          node.readonly,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
