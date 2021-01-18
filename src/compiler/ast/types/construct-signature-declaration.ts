import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * ConstructSignatureDeclaration
 */

export interface ConstructSignatureDeclaration extends Node {
  readonly typeParameters: TypeParameters;
  readonly accessModifiers: AccessModifiers;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructSignatureDeclaration(
  accessModifiers: AccessModifiers,
  typeParameters: TypeParameters,
  parameters: Parameters,
  returnType: TypeNode | null,
  start: number,
  end: number
): ConstructSignatureDeclaration {
  return {
    kind: NodeKind.ConstructSignatureDeclaration,
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
