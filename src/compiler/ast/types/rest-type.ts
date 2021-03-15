import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from './';

/**
 * RestType
 */

export interface RestType extends Node {
  readonly type: TypeNode;
}

export function createRestType(type: TypeNode, flags: NodeFlags, start: number, end: number): RestType {
  return {
    kind: NodeKind.RestType,
    type,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateRestType(node: RestType, type: TypeNode): RestType {
  return node.type !== type ? updateNode(createRestType(type, node.flags, node.start, node.end), node) : node;
}
