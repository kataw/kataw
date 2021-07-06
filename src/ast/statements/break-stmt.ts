import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Break statement.
 */
export interface BreakStatement extends SyntaxNode {
  readonly breakKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly label: Identifier | null;
}

export function createBreakStatement(
  breakKeyword: SyntaxToken<TokenSyntaxKind>,
  label: Identifier | null,
  start: number,
  end: number
): BreakStatement {
  return {
    kind: SyntaxKind.BreakStatement,
    breakKeyword,
    label,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
