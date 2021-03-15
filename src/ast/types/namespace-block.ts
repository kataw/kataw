import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Statement } from '../statements';

/**
 * NamespaceBlock
 */

export interface NamespaceBlock extends Node {
  readonly statements: Statement[];
  readonly multiline: boolean;
}

export function createNamespaceBlock(
  statements: Statement[],
  multiline: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): NamespaceBlock {
  return {
    kind: NodeKind.NamespaceBlock,
    statements,
    multiline,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateNamespaceBlock(node: NamespaceBlock, statements: Statement[]): NamespaceBlock {
  return node.statements !== statements
    ? updateNode(createNamespaceBlock(statements, node.multiline, node.flags, node.start, node.end), node)
    : node;
}
