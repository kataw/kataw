import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';

/**
 * TupleType
 */

export interface TupleType extends Node {
  readonly elementTypes: TypeNode[];
  readonly multiline: boolean;
}

export function createTupleType(
  elementTypes: TypeNode[],
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TupleType {
  return {
    kind: NodeKind.TupleType,
    elementTypes,
    multiline,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTupleType(node: TupleType, elementTypes: TypeNode[]): TupleType {
  return node.elementTypes !== elementTypes
    ? updateNode(createTupleType(elementTypes, node.multiline, node.flags, node.start, node.end), node)
    : node;
}
