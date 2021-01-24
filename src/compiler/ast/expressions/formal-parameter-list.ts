import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';
import { updateNode } from '../../utils';

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
  formalParameterList: FormalParameter[],
  trailingComma: boolean
): FormalParameterList {
  return node.formalParameterList !== formalParameterList || node.trailingComma !== trailingComma
    ? updateNode(createFormalParameterList(formalParameterList, trailingComma, node.flags, node.start, node.end), node)
    : node;
}
