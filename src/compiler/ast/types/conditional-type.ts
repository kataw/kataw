import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';

/**
 * ConditionalType
 */

export interface ConditionalType extends Node {
  readonly checkType: TypeNode;
  readonly extendsType: TypeNode;
  readonly trueType: TypeNode;
  readonly falseType: TypeNode;
}

export function createConditionalType(
  checkType: TypeNode,
  extendsType: TypeNode,
  trueType: TypeNode,
  falseType: TypeNode,
  start: number,
  end: number
): ConditionalType {
  return {
    kind: NodeKind.ConditionalType,
    checkType,
    extendsType,
    trueType,
    falseType,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
