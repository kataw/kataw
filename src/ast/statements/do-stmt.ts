import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * Do-while statement.
 */
export interface DoWhileStatement extends SyntaxNode {
  readonly doKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly statement: StatementNode;
  readonly whileKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
}

export function createDoWhileStatement(
  doKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  whileKeyword: SyntaxToken<TokenSyntaxKind>,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): DoWhileStatement {
  return {
    kind: SyntaxKind.DoWhileStatement,
    doKeyword,
    statement,
    whileKeyword,
    expression,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
