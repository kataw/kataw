import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { Parameters } from './parameters';
import { TypeParameters } from './type-parameter-list';

/**
 * IndexSignature
 */

export interface IndexSignature extends Node {
  readonly parameters: Parameters;
  readonly returnType: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifiers: AccessModifiers;
}

export function createIndexSignature(
  accessModifiers: AccessModifiers,
  parameters: Parameters,
  returnType: TypeNode | null,
  readonly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): IndexSignature {
  return {
    kind: NodeKind.IndexSignature,
    accessModifiers,
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
  node: IndexSignature,
  parameters: Parameters,
  returnType: TypeNode | null
): IndexSignature {
  return node.returnType !== returnType || node.parameters !== parameters
    ? updateNode(
        createIndexSignature(
          node.accessModifiers,
          parameters,
          returnType,
          node.readonly,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
