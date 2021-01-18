import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression } from '.';

/**
 * Import call
 */
export interface ImportCall extends Node {
  readonly expression: Expression;
}

export function createImportCall(expression: Expression, flags: NodeFlags, start: number, end: number): ImportCall {
  return {
    kind: NodeKind.ImportCall,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2018 | TransformFlags.DynamicImport,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
export function updateImportCall(node: ImportCall, expression: Expression): ImportCall {
  return node.expression !== expression
    ? updateNode(createImportCall(expression, node.flags, node.start, node.end), node)
    : node;
}
