import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { TypeNode } from '.';
import { Parameters } from './parameters';

/**
 * IndexSignature
 */

export interface IndexSignature extends Node {
  readonly parameters: Parameters;
  readonly type: TypeNode | null;
  readonly readonly: boolean;
  readonly accessModifiers: AccessModifiers;
}

export function createIndexSignature(
  accessModifiers: AccessModifiers,
  parameters: Parameters,
  type: TypeNode | null,
  readonly: boolean,
  start: number,
  end: number
): IndexSignature {
  return {
    kind: NodeKind.IndexSignature,
    accessModifiers,
    parameters,
    type,
    readonly,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
