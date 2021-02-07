import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { TypeParameters } from './type-parameter-list';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';

/**
 * ConstructSignature
 */

export interface ConstructSignature extends Node {
  readonly typeParameters: TypeParameters | null;
  readonly accessModifier: AccessModifier | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructSignature(
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  flags: NodeFlags,
  start: number,
  end: number
): ConstructSignature {
  return {
    kind: NodeKind.ConstructSignature,
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

export function updateConstructSignature(
  accessModifier: AccessModifier | null,
  node: ConstructSignature,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): ConstructSignature {
  return node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createConstructSignature(
          accessModifier,
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
