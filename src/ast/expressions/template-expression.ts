import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { TemplateSpan } from './template-span';
import { TemplateTail } from './template-tail';

/**
 * Template expression.
 */
export interface TemplateExpression extends SyntaxNode {
  readonly spans: readonly TemplateSpan[];
  readonly tail: TemplateTail;
}

export function createTemplateExpression(
  spans: readonly TemplateSpan[],
  tail: TemplateTail,
  start: number,
  end: number
): TemplateExpression {
  return {
    kind: SyntaxKind.TemplateExpression,
    spans,
    tail,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
