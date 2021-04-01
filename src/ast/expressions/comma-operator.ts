import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

export interface CommaOperator extends SyntaxNode {
  kind: SyntaxKind.CommaOperator;
  expressions: ExpressionNode[];
}

export function createCommaOperator(expressions: ExpressionNode[], start: number, end: number): CommaOperator {
  return {
    kind: SyntaxKind.CommaOperator,
    expressions,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
