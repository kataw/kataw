import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { BlockStatement } from './block-stmt';

export interface Block extends SyntaxNode {
  kind: SyntaxKind.Block;
  block: BlockStatement;
}

export function createBlock(block: BlockStatement, start: number, end: number): Block {
  return {
    kind: SyntaxKind.Block,
    block,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
