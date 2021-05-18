import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { Block } from './block';

export interface BlockStatement extends SyntaxNode {
  kind: SyntaxKind.BlockStatement;
  block: Block;
}

export function createBlockStatement(block: Block, start: number, end: number): BlockStatement {
  return {
    kind: SyntaxKind.BlockStatement,
    block,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
