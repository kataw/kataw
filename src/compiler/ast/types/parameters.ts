import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { ParameterDeclaration } from './parameter-declaration';

/**
 * Parameters
 */

export interface Parameters extends Node {
  readonly parameterList: readonly ParameterDeclaration[];
}

export function createParameters(
  parameterList: readonly ParameterDeclaration[],
  start: number,
  end: number
): Parameters {
  return {
    kind: NodeKind.Parameters,
    parameterList,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
