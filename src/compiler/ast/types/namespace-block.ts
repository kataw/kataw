import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '../statements';

/**
 * NamespaceBlock
 */

export interface NamespaceBlock extends Node {
  readonly statements: Statement[];
}

export function createNamespaceBlock(
  statements: Statement[],
  flags: NodeFlags,
  start: number,
  end: number
): NamespaceBlock {
  return {
    kind: NodeKind.NamespaceBlock,
    statements,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateNamespaceBlock(node: NamespaceBlock, statements: Statement[]): NamespaceBlock {
  return node.statements !== statements
    ? updateNode(createNamespaceBlock(statements, node.flags, node.start, node.end), node)
    : node;
}
