import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';

/**
 * TokenNode
 *
 * Note: The 'kind' of the 'TokenNode' should be any of the type keywords.
 *
 * For example:
 *
 *  'createTokenNode(NodeKind.VoidKeyword, 1, 2)';
 */

export type TokenNode = Node;

export function createTokenNode(kind: NodeKind, start: number, end: number): TokenNode {
  return {
    kind,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
