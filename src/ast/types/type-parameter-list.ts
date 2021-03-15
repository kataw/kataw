import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeParameter } from './type-parameter';

/**
 * Type parameter list
 */

export interface TypeParameters extends Node {
  readonly typeParameterList: readonly TypeParameter[];
}

export function createTypeParameters(
  typeParameterList: readonly TypeParameter[],
  flags: NodeFlags,
  start: number,
  end: number
): TypeParameters {
  return {
    kind: NodeKind.TypeParameterList,
    typeParameterList,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypeParameters(
  node: TypeParameters,
  typeParameterList: readonly TypeParameter[]
): TypeParameters {
  return node.typeParameterList !== typeParameterList
    ? updateNode(createTypeParameters(typeParameterList, node.flags, node.start, node.end), node)
    : node;
}
