import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';
import { Expression } from '.';
import { ArrayLiteral } from './array-literal';
import { ArgumentList } from './argument-list';

/**
 * Spread element
 */
export interface SpreadElement extends Node {
  readonly argument: Expression;
  /* @internal */
  readonly parent: ArrayLiteral | ArgumentList | null;
}

export function createSpreadElement(argument: Expression, flags: NodeFlags, start: number, end: number): SpreadElement {
  return {
    kind: NodeKind.SpreadElement,
    argument,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2016,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updatSpreadElement(node: SpreadElement, argument: Expression): SpreadElement {
  return node.argument !== argument
    ? updateNode(createSpreadElement(argument, node.flags, node.start, node.end), node)
    : node;
}
