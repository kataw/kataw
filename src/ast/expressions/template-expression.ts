import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
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
  flags: NodeFlags,
  start: number,
  end: number
): TemplateExpression {
  return {
    kind: SyntaxKind.TemplateExpression,
    spans,
    tail,
    flags,
    start,
    end
  };
}
