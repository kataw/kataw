import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '../expressions';

export interface FromClause extends SyntaxNode {
  readonly fromKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly from: ExpressionNode;
}

export function createFromClause(
  fromKeyword: SyntaxToken<TokenSyntaxKind>,
  from: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): FromClause {
  return {
    kind: SyntaxKind.FromClause,
    fromKeyword,
    from,
    flags,
    start,
    end
  };
}
