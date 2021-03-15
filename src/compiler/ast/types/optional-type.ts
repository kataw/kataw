import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
import { updateNode } from '../../utils';

/**
 * Optional type
 */

export interface OptionalType extends Node {
  readonly valueType: TypeNode;
}

export function createOptionalType(valueType: TypeNode, flags: NodeFlags, start: number, end: number): OptionalType {
  return {
    kind: NodeKind.OptionalType,
    valueType,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateOptionalType(node: OptionalType, valueType: TypeNode): OptionalType {
  return node.valueType !== valueType
    ? updateNode(createOptionalType(valueType, node.flags, node.start, node.end), node)
    : node;
}
