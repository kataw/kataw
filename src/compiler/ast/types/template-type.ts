import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from '.';

/**
 * TemplateType
 */

export interface TemplateType extends Node {
  readonly type: TypeNode;
  readonly literal: any;
}

export function createTemplateType(type: TypeNode, literal: any, start: number, end: number): TemplateType {
  return {
    kind: NodeKind.TemplateType,
    type,
    literal,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
