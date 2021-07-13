import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { TemplateExpression } from './template-expression';
import { TemplateTail } from './template-tail';

/**
 * Tagged template
 */
export interface TaggedTemplate extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly template: TemplateTail | TemplateExpression;
}

export function createTaggedTemplate(
  member: ExpressionNode,
  template: TemplateTail | TemplateExpression,
  start: number,
  end: number
): TaggedTemplate {
  return {
    kind: SyntaxKind.TaggedTemplate,
    member,
    template,
    flags: NodeFlags.ExpressionNode,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
