import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { LeftHandSideExpression } from '.';
import { TemplateExpression } from './template-expression';
import { TemplateTail } from './template-tail';
import { TypeArguments } from '../types/type-arguments';

/**
 * Tagged template
 */
export interface TaggedTemplate extends Node {
  readonly member: LeftHandSideExpression;
  readonly typeArguments: TypeArguments | null;
  readonly template: TemplateTail | TemplateExpression;
  readonly optional: boolean; // NOTE: Invalid syntax, only used to report a grammar error.
}

export function createTaggedTemplate(
  member: LeftHandSideExpression,
  typeArguments: TypeArguments | null,
  template: TemplateTail | TemplateExpression,
  optional: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): TaggedTemplate {
  return {
    kind: NodeKind.TaggedTemplate,
    member,
    typeArguments,
    template,
    optional,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2015,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateTaggedTemplaten(
  node: TaggedTemplate,
  member: LeftHandSideExpression,
  typeArguments: TypeArguments | null,
  template: TemplateTail | TemplateExpression
): TaggedTemplate {
  return node.member !== member || node.typeArguments !== typeArguments || node.template !== template
    ? updateNode(
        createTaggedTemplate(member, typeArguments, template, node.optional, node.flags, node.start, node.end),
        node
      )
    : node;
}
