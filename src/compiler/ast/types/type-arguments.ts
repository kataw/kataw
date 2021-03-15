import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';

/**
 * TypeArguments
 */

export interface TypeArguments extends Node {
  readonly typeArgumentsList: readonly TypeNode[];
}

export function createTypeArguments(
  typeArgumentsList: readonly TypeNode[],
  flags: NodeFlags,
  start: number,
  end: number
): TypeArguments {
  return {
    kind: NodeKind.TypeArguments,
    typeArgumentsList,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypeArguments(node: TypeArguments, typeArgumentsList: readonly TypeNode[]): TypeArguments {
  return node.typeArgumentsList !== typeArgumentsList
    ? updateNode(createTypeArguments(typeArgumentsList, node.flags, node.start, node.end), node)
    : node;
}
