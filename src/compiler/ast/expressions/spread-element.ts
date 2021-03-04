import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { Expression } from '.';
import { ArrayLiteral } from './array-literal';
import { ArgumentList } from './argument-list';

/**
 * Spread element
 */
export interface SpreadElement extends Node {
  readonly argument: Expression;
}

export function createSpreadElement(argument: Expression, flags: NodeFlags, start: number, end: number): SpreadElement {
  return {
    kind: NodeKind.SpreadElement,
    argument,
    flags,
    intersects: false,
    transformFlags: TransformFlags.ES2016,
    start,
    end
  };
}

export function updatSpreadElement(node: SpreadElement, argument: Expression): SpreadElement {
  return node.argument !== argument
    ? updateNode(createSpreadElement(argument, node.flags, node.start, node.end), node)
    : node;
}
