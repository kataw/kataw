import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { ExpressionNode } from '.';

export interface AssignmentExpression extends SyntaxNode {
  readonly operatorToken: SyntaxToken<TokenSyntaxKind>;
  readonly left: ExpressionNode;
  readonly right: ExpressionNode;
}

export function createAssignmentExpression(
  left: ExpressionNode,
  operatorToken: SyntaxToken<TokenSyntaxKind>,
  right: ExpressionNode,
  flags: NodeFlags,
  start: number,
  end: number
): AssignmentExpression {
  return {
    kind: SyntaxKind.AssignmentExpression,
    left,
    operatorToken,
    right,
    flags,
    transformFlags: TransformFlags.ShouldIndentIfInlining,
    start,
    end
  };
}
