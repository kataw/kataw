import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '../types';
import { AccessModifier } from '../types/access-modifier';
import { FormalParameter } from './formal-parameter';

export interface ArrowParameters extends Node {
  readonly elements: readonly FormalParameter[];
  readonly type: TypeNode | null;
  readonly accessModifier: AccessModifier | null;
  readonly trailingComma: boolean;
}

export function createArrowParameters(
  elements: readonly FormalParameter[],
  type: TypeNode | null,
  accessModifier: AccessModifier | null,
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ArrowParameters {
  return {
    kind: NodeKind.ArrowParameters,
    elements,
    type,
    accessModifier,
    trailingComma,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateArrowParameters(
  node: ArrowParameters,
  elements: readonly FormalParameter[],
  type: TypeNode | null,
  accessModifier: AccessModifier | null,
  trailingComma: boolean
): ArrowParameters {
  return node.elements !== elements ||
    node.type !== type ||
    node.accessModifier !== accessModifier ||
    node.trailingComma !== trailingComma
    ? updateNode(
        createArrowParameters(elements, type, accessModifier, trailingComma, node.flags, node.start, node.end),
        node
      )
    : node;
}
