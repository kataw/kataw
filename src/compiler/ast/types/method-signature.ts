import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { PropertyName } from '../expressions';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * Method signature
 */

export interface MethodSignature extends Node {
  readonly name: PropertyName;
  readonly optional: boolean;
  readonly readonly: boolean;
  readonly accessModifiers: AccessModifiers;
  readonly typeParameters: TypeParameters;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createMethodSignature(
  name: PropertyName,
  optional: boolean,
  readonly: boolean,
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null,
  start: number,
  end: number
): MethodSignature {
  return {
    kind: NodeKind.MethodSignature,
    name,
    readonly,
    optional,
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
