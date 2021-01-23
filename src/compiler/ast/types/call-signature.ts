import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

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
  start: number,
  end: number
): CallSignature {
  return {
    kind: NodeKind.CallSignature,
    accessModifiers,
    typeParameters,
    parameters,
    returnType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
