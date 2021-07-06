import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { Block } from './block';

export interface BlockStatement extends SyntaxNode {
  kind: SyntaxKind.BlockStatement;
  block: Block;
}

export function createBlockStatement(block: Block, flags: NodeFlags, start: number, end: number): BlockStatement {
  return {
    kind: SyntaxKind.BlockStatement,
    block,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
