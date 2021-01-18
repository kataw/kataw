import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeParameter } from './type-parameter';

/**
 * InferType
 */

export interface InferType extends Node {
  readonly typeParameter: TypeParameter;
}

export function createInferType(typeParameter: TypeParameter, start: number, end: number): InferType {
  return {
    kind: NodeKind.InferType,
    typeParameter,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
