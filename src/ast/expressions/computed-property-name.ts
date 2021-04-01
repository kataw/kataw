import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

export interface ComputedPropertyName extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createComputedPropertyName(
  expression: ExpressionNode,
  start: number,
  end: number
): ComputedPropertyName {
  return {
    kind: SyntaxKind.ComputedPropertyName,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
