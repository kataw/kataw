import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeParameter } from './type-parameter';

/**
 * Type parameter list
 */

export interface TypeParameters extends Node {
  readonly typeParameterList: readonly TypeParameter[];
}

export function createTypeParameters(
  typeParameterList: readonly TypeParameter[],
  start: number,
  end: number
): TypeParameters {
  return {
    kind: NodeKind.TypeParameterList,
    typeParameterList,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
