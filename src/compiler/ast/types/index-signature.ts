import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';
import { PropertyKind } from '../../parser/common';

/**
 * IndexSignature
 */

export interface IndexSignature extends Node {
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
  readonly isReadOnly: boolean;
  readonly accessModifier: AccessModifier | null;
}

export function createIndexSignature(
  accessModifier: AccessModifier | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  isReadOnly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): IndexSignature {
  return {
    kind: NodeKind.IndexSignature,
    accessModifier,
    parameters,
    returnType,
    isReadOnly,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateIndexSignature(
  node: IndexSignature,
  accessModifier: AccessModifier | null,
  isReadOnly: boolean,
  parameters: Parameters,
  returnType: TypeNode | null
): IndexSignature {
  return node.accessModifier !== accessModifier ||
    node.isReadOnly !== isReadOnly ||
    node.returnType !== returnType ||
    node.parameters !== parameters
    ? updateNode(
        createIndexSignature(accessModifier, parameters, returnType, isReadOnly, node.flags, node.start, node.end),
        node
      )
    : node;
}
