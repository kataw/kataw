import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { ElementList } from './element-list';
import { updateNode } from '../../../visitor/common';

/**
 * An IdentifierReference expression.
 */
export interface ArrayLiteral extends Node {
  readonly elementList: ElementList;
}

export function createArrayLiteral(
  elementList: ElementList,
  flags: NodeFlags,
  start: number,
  end: number
): ArrayLiteral {
  return {
    kind: NodeKind.ArrayLiteral,
    elementList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateArrayLiteral(node: ArrayLiteral, elementList: ElementList): ArrayLiteral {
  return node.elementList !== elementList
    ? updateNode(createArrayLiteral(elementList, node.flags, node.start, node.end), node)
    : node;
}
