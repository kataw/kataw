import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';
import { updateNode } from '../../utils';

/**
 * Parenthesized type
 */

export interface ParenthesizedType extends Node {
  readonly type: TypeNode;
}

export function createParenthesizedType(
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): ParenthesizedType {
  return {
    kind: NodeKind.ParenthesizedType,
    type,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateParenthesizedType(node: ParenthesizedType, type: TypeNode): ParenthesizedType {
  return node.type !== type ? updateNode(createParenthesizedType(type, node.flags, node.start, node.end), node) : node;
}
