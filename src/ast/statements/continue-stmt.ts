import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Break statement.
 */
export interface ContinueStatement extends SyntaxNode {
  readonly continueKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly label: Identifier | null;
}

export function createContinueStatement(
  continueKeyword: SyntaxToken<TokenSyntaxKind>,
  label: Identifier | null,
  start: number,
  end: number
): ContinueStatement {
  return {
    kind: SyntaxKind.ContinueStatement,
    continueKeyword,
    label,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
