import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateDecoratorList(node: DecoratorList, decoratorList: Decorator[]): DecoratorList {
  return node.decoratorList !== decoratorList
    ? updateNode(createDecoratorList(decoratorList, node.flags, node.start, node.end), node)
    : node;
}
