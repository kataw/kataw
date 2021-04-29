import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * New target expression.
 */
export interface NewTarget extends SyntaxNode {
  readonly targetKeyword: SyntaxToken<TokenSyntaxKind>;
}

export function createNewTarget(targetKeyword: SyntaxToken<TokenSyntaxKind>, start: number, end: number): NewTarget {
  return {
    kind: SyntaxKind.NewTarget,
    targetKeyword,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
