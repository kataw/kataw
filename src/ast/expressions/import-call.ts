import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

/**
 * Import call
 */
export interface ImportCall extends SyntaxNode {
  readonly importKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createImportCall(
  importKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  start: number,
  end: number
): ImportCall {
  return {
    kind: SyntaxKind.ImportCall,
    importKeyword,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
