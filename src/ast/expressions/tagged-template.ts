import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { ExpressionNode } from '.';
import { TemplateExpression } from './template-expression';
import { TemplateTail } from './template-tail';

/**
 * Tagged template
 */
export interface TaggedTemplate extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly template: TemplateTail | TemplateExpression;
  readonly optional: boolean; // NOTE: Invalid syntax, only used to report a grammar error.
}

export function createTaggedTemplate(
  member: ExpressionNode,
  template: TemplateTail | TemplateExpression,
  optional: boolean,
  start: number,
  end: number
): TaggedTemplate {
  return {
    kind: SyntaxKind.TaggedTemplate,
    member,
    template,
    optional,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
