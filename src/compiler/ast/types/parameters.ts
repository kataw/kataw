import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { ParameterDeclaration } from './parameter-declaration';

/**
 * Parameters
 */

export interface Parameters extends Node {
  readonly parameterList: readonly ParameterDeclaration[];
  readonly trailingcomma: boolean;
}

export function createParameters(
  parameterList: readonly ParameterDeclaration[],
  trailingcomma: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): Parameters {
  return {
    kind: NodeKind.Parameters,
    parameterList,
    trailingcomma,
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
    ? updateNode(createParameters(parameterList, node.trailingcomma, node.flags, node.start, node.end), node)
    : node;
}
