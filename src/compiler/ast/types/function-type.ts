import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';

/**
 * FunctionType
 */

export interface FunctionType extends Node {
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createFunctionType(
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): FunctionType {
  return {
    kind: NodeKind.FunctionType,
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

export function updateFunctionType(
  node: FunctionType,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): FunctionType {
  return node.typeParameters !== typeParameters || node.parameters !== parameters || node.returnType !== returnType
    ? updateNode(createFunctionType(typeParameters, parameters, returnType, node.flags, node.start, node.end), node)
    : node;
}
