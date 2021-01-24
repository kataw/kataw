import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { updateNode } from '../../utils';

/**
 * CallSignature
 */

export interface CallSignature extends Node {
  readonly accessModifiers: AccessModifiers;
  readonly typeParameters: TypeParameters;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createCallSignature(
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): CallSignature {
  return {
    kind: NodeKind.CallSignature,
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

export function updateCallSignature(
  node: CallSignature,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null
): CallSignature {
  return node.typeParameters !== typeParameters || node.parameters !== parameters || node.returnType !== returnType
    ? updateNode(
        createCallSignature(
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
