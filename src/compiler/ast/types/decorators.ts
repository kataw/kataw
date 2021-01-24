import { Node, NodeFlags, NodeKind, TransformFlags, AccessModifiers } from '../node';
import { updateNode } from '../../utils';
import {  LeftHandSideExpression } from '../expressions';

/**
 * Decorator
 */

export interface Decorator extends Node {
  readonly expression: LeftHandSideExpression;
}

export function createDecorator(
  expression:  LeftHandSideExpression,
  flags: NodeFlags,
  start: number,
  end: number
): Decorator {
  return {
    kind: NodeKind.Decorator,
    expression,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateConstructorType(
  node: Decorator,
  expression:  LeftHandSideExpression
): Decorator {
  return node.expression !== expression
    ? updateNode(
      createDecorator(
          expression,
          node.flags,
          node.start,
          node.end
        ),
        node
      )
    : node;
}
