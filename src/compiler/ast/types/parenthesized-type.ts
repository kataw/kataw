import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * Parenthesized type
 */

export interface ParenthesizedType extends Node {
  readonly type: TypeNode;
}

export function createParenthesizedType(type: TypeNode, start: number, end: number): ParenthesizedType {
  return {
    kind: NodeKind.ParenthesizedType,
    type,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
