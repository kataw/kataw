import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { updateNode } from '../../utils';
import { AccessModifier } from './access-modifier';

/**
 * CallSignature
 */

export interface CallSignature extends Node {
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createCallSignature(
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): CallSignature {
  return {
    kind: NodeKind.CallSignature,
    accessModifier,
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
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): CallSignature {
  return node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createCallSignature(accessModifier, typeParameters, parameters, returnType, node.flags, node.start, node.end),
        node
      )
    : node;
}
