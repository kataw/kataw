import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { Parameters } from './parameters';
import { AccessModifier } from './access-modifier';

/**
 * IndexSignature
 */

export interface IndexSignature extends Node {
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifier: AccessModifier | null;
}

export function createIndexSignature(
  accessModifier: AccessModifier | null,
  parameters: Parameters,
  returnType: TypeNode | null,
  readonly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): IndexSignature {
  return {
    kind: NodeKind.IndexSignature,
    accessModifier,
    parameters,
    returnType,
    readonly,
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
  accessModifier: AccessModifier | null,
  node: IndexSignature,
  parameters: Parameters,
  returnType: TypeNode | null
): IndexSignature {
  return node.accessModifier !== accessModifier || node.returnType !== returnType || node.parameters !== parameters
    ? updateNode(
        createIndexSignature(accessModifier, parameters, returnType, node.readonly, node.flags, node.start, node.end),
        node
      )
    : node;
}
