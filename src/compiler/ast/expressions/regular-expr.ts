import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Regular expression
 */
export interface RegularExpressionLiteral extends Node {
  readonly text: string;
}

export function createRegularExpressionLiteral(
  text: string,
  flags: NodeFlags,
  start: number,
  end: number
): RegularExpressionLiteral {
  return {
    kind: NodeKind.RegularExpressionLiteral,
    text,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
