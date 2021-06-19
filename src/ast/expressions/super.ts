import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * An super call expression.
 */
export interface Super extends SyntaxNode {
  readonly superKeyword: SyntaxToken<TokenSyntaxKind>;
}

export function createSuper(superKeyword: SyntaxToken<TokenSyntaxKind>, start: number, end: number): Super {
  return {
    kind: SyntaxKind.Super,
    superKeyword,
    flags: NodeFlags.ExpressionNode | NodeFlags.NoChildren,
    start,
    end
  };
}
