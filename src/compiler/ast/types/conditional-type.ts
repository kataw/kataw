import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): ConditionalType {
  return {
    kind: NodeKind.ConditionalType,
    checkType,
    extendsType,
    trueType,
    falseType,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateConditionalType(
  node: ConditionalType,
  checkType: TypeNode,
  extendsType: TypeNode,
  trueType: TypeNode,
  falseType: TypeNode
): ConditionalType {
  return node.checkType !== checkType ||
    node.extendsType !== extendsType ||
    node.trueType !== trueType ||
    node.falseType !== falseType
    ? updateNode(
        createConditionalType(checkType, extendsType, trueType, falseType, node.flags, node.start, node.end),
        node
      )
    : node;
}
