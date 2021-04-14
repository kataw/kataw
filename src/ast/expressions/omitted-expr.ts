import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';

/**
 * OmittedExpression
 */

export type OmittedExpression = SyntaxNode;

export function createOmittedExpression(start: number, end: number): OmittedExpression {
  return {
    kind: SyntaxKind.OmittedExpression,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
