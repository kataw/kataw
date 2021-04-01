import { ExpressionNode } from './';
import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { BinaryExpression } from './binary-expr';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Conditional expression.
 */
export interface ConditionalExpression extends SyntaxNode {
  readonly shortCircuit: ExpressionNode;
  readonly questionToken: SyntaxToken<TokenSyntaxKind>;
  readonly consequent: ExpressionNode;
  readonly colonToken: SyntaxToken<TokenSyntaxKind>;
  readonly alternate: ExpressionNode;
}

export function createConditionalExpression(
  shortCircuit: BinaryExpression | ExpressionNode,
  questionToken: SyntaxToken<TokenSyntaxKind>,
  consequent: ExpressionNode,
  colonToken: SyntaxToken<TokenSyntaxKind>,
  alternate: ExpressionNode,
  start: number,
  end: number
): ConditionalExpression {
  return {
    kind: SyntaxKind.ConditionalExpression,
    shortCircuit,
    questionToken,
    consequent,
    colonToken,
    alternate,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
