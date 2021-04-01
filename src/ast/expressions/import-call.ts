import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * Import call
 */
export interface ImportCall extends SyntaxNode {
  readonly expression: ExpressionNode;
}

export function createImportCall(expression: ExpressionNode, start: number, end: number): ImportCall {
  return {
    kind: SyntaxKind.ImportCall,
    expression,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
