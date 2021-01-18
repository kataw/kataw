import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * TypeArguments
 */

export interface TypeArguments extends Node {
  readonly typeArgumentsList: readonly TypeNode[];
}

export function createTypeArguments(typeArgumentsList: readonly TypeNode[], start: number, end: number): TypeArguments {
  return {
    kind: NodeKind.TypeArguments,
    typeArgumentsList,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
