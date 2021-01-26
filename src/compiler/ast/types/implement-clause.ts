import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
/**
 * ImplementClause
 */

export interface ImplementClause extends Node {
  readonly type: TypeNode;
}

export function createImplementClause(type: TypeNode, flags: NodeFlags, start: number, end: number): ImplementClause {
  return {
    kind: NodeKind.ImplementClause,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateImplementClause(node: ImplementClause, type: TypeNode): ImplementClause {
  return node.type !== type ? updateNode(createImplementClause(type, node.flags, node.start, node.end), node) : node;
}
