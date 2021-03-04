import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeParameter } from './type-parameter';

/**
 * InferType
 */

export interface InferType extends Node {
  readonly typeParameter: TypeParameter;
}

export function createInferType(typeParameter: TypeParameter, flags: NodeFlags, start: number, end: number): InferType {
  return {
    kind: NodeKind.InferType,
    typeParameter,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateInferType(node: InferType, typeParameter: TypeParameter): InferType {
  return node.typeParameter !== typeParameter
    ? updateNode(createInferType(typeParameter, node.flags, node.start, node.end), node)
    : node;
}
