import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { BlockStatement } from './block-stmt';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions';

/**
 * With statements
 */
export interface WithStatement extends SyntaxNode {
  readonly withKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly expression: ExpressionNode;
  readonly statement: StatementNode | BlockStatement;
}

export function createWithStatement(
  withKeyword: SyntaxToken<TokenSyntaxKind>,
  expression: ExpressionNode,
  statement: StatementNode | BlockStatement,
  flags: NodeFlags,
  start: number,
  end: number
): WithStatement {
  return {
    kind: SyntaxKind.WithStatement,
    withKeyword,
    expression,
    statement,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
