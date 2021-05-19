import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { DecoratorList } from './decorator-list';
import { BlockStatement } from '../statements/block-stmt';

/**
 * static block
 */
export interface StaticBlock extends SyntaxNode {
  readonly decorators: DecoratorList | null;
  readonly declaredKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  readonly block: BlockStatement;
}

export function createStaticBlock(
  decorators: DecoratorList | null,
  declaredKeyword: SyntaxToken<TokenSyntaxKind> | null,
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null,
  block: BlockStatement,
  start: number,
  end: number
): StaticBlock {
  return {
    kind: SyntaxKind.StaticBlock,
    decorators,
    declaredKeyword,
    staticKeyword,
    block,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
