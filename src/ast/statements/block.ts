import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { StatementNode } from '.';

export interface Block extends SyntaxNode {
  readonly kind: SyntaxKind.Block;
  readonly statements: StatementNode[];
}

export function createBlock(statements: StatementNode[], flags: NodeFlags, start: number, end: number): Block {
  return {
    kind: SyntaxKind.Block,
    statements,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
