import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';

/**
 * Default and case clause statement.
 */

export interface DefaultClause extends SyntaxNode {
  readonly defaultKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly colonToken: SyntaxToken<TokenSyntaxKind>;
  readonly statements: readonly StatementNode[];
}
export function createDefaultClause(
  defaultKeyword: SyntaxToken<TokenSyntaxKind>,
  colonToken: SyntaxToken<TokenSyntaxKind>,
  statements: readonly StatementNode[],
  start: number,
  end: number
): DefaultClause {
  return {
    kind: SyntaxKind.DefaultClause,
    defaultKeyword,
    colonToken,
    statements,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
