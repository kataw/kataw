import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ParameterDeclaration } from './parameter-declaration';

/**
 * Parameters
 */

export interface Parameters extends Node {
  readonly parameterList: readonly ParameterDeclaration[];
}

export function createParameters(
  parameterList: readonly ParameterDeclaration[],
  flags: NodeFlags,
  start: number,
  end: number
): Parameters {
  return {
    kind: NodeKind.Parameters,
    parameterList,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateParameters(node: Parameters, parameterList: readonly ParameterDeclaration[]): Parameters {
  return node.parameterList !== parameterList
    ? updateNode(createParameters(parameterList, node.flags, node.start, node.end), node)
    : node;
}
