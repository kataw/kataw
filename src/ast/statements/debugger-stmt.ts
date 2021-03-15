import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Debugger statement
 */
export type DebuggerStatement = Node;

export function createDebuggerStatement(flags: NodeFlags, start: number, end: number): DebuggerStatement {
  return {
    kind: NodeKind.DebuggerStatement,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
