import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * ConstructorType
 */

export interface ConstructorType extends Node {
  readonly accessModifiers: AccessModifiers;
  readonly isAbstract: boolean;
  readonly typeParameters: TypeParameters;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructorType(
  accessModifiers: AccessModifiers,
  isAbstract: boolean,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode,
  start: number,
  end: number
): ConstructorType {
  return {
    kind: NodeKind.ConstructorType,
    accessModifiers,
    isAbstract,
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
