import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
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
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
