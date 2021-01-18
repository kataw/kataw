import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../../visitor/common';

import { FormalParameter } from './formal-parameter';

export interface FormalParameterList extends Node {
  readonly formalParameterList: readonly FormalParameter[];
  readonly trailingComma: boolean;
}

export function createFormalParameterList(
  formalParameterList: readonly FormalParameter[],
  trailingComma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): FormalParameterList {
  return {
    kind: NodeKind.FormalParameterList,
    formalParameterList,
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

export function updateFormalParameterList(
  node: FormalParameterList,
  formalParameterList: FormalParameter[]
): FormalParameterList {
  return node.formalParameterList !== formalParameterList
    ? updateNode(
        createFormalParameterList(formalParameterList, node.trailingComma, node.flags, node.start, node.end),
        node
      )
    : node;
}
