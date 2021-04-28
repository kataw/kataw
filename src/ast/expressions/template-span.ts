import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { ExpressionNode } from '.';

/**
 * Template span
 */
export interface TemplateSpan extends SyntaxNode {
  readonly rawText: string;
  readonly text: string;
  readonly expression: ExpressionNode | null;
}

export function createTemplateSpan(
  rawText: string,
  text: string,
  expression: ExpressionNode | null,
  start: number,
  end: number
): TemplateSpan {
  return {
    kind: SyntaxKind.TemplateSpan,
    rawText,
    text,
    expression,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
