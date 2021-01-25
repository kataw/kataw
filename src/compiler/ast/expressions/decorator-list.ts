import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { LeftHandSideExpression } from '.';
import { Decorator } from './decorators';

/**
 * Decorator list
 */

export interface DecoratorList extends Node {
  readonly decoratorList: Decorator[];
}

export function createDecoratorList(
  decoratorList: Decorator[],
  flags: NodeFlags,
  start: number,
  end: number
): DecoratorList {
  return {
    kind: NodeKind.DecoratorList,
    decoratorList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateDecoratorList(node: DecoratorList, decoratorList: Decorator[]): DecoratorList {
  return node.decoratorList !== decoratorList
    ? updateNode(createDecoratorList(decoratorList, node.flags, node.start, node.end), node)
    : node;
}
