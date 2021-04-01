import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * Template tail
 */
export interface TemplateTail extends SyntaxNode {
  readonly rawText: string;
  readonly text: string;
}

export function createTemplateTail(rawText: string, text: string, start: number, end: number): TemplateTail {
  return {
    kind: SyntaxKind.TemplateTail,
    rawText,
    text,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
