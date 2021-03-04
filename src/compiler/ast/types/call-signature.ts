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
  readonly isReadOnly: boolean;
  readonly accessModifier: AccessModifier | null;
  readonly typeParameters: TypeParameters | null;
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
}

export function createCallSignature(
  isReadOnly: boolean,
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
    isReadOnly,
    accessModifier,
    typeParameters,
    parameters,
    returnType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateCallSignature(
  node: CallSignature,
  isReadOnly: boolean,
  accessModifier: AccessModifier | null,
  typeParameters: TypeParameters | null,
  parameters: Parameters,
  returnType: TypeNode | null
): CallSignature {
  return node.isReadOnly !== isReadOnly ||
    node.accessModifier !== accessModifier ||
    node.typeParameters !== typeParameters ||
    node.parameters !== parameters ||
    node.returnType !== returnType
    ? updateNode(
        createCallSignature(
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
