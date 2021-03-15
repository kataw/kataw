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
  readonly isReadOnly: boolean;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createConstructSignature(
  isReadOnly: boolean,
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
    isReadOnly,
    accessModifier,
    typeParameters,
    parameters,
    returnType,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateConstructSignature(
  node: ConstructSignature,
  isReadOnly: boolean,
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): ConstructSignature {
  return node.isReadOnly !== isReadOnly ||
    node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createConstructSignature(
          isReadOnly,
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
