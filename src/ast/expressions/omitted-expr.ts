import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * OmittedExpression
 */

export type OmittedExpression = SyntaxNode;

export function createOmittedExpression(start: number, end: number): OmittedExpression {
  return {
    kind: SyntaxKind.OmittedExpression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode | NodeFlags.ChildLess,
    start,
    end
  };
}
