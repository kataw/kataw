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
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
