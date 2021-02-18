import { Node, NodeKind, NodeFlags, TransformFlags } from '../node';

/**
 * Debugger statement
 */
export type DebuggerStatement = Node;

export function createDebuggerStatement(flags: NodeFlags, start: number, end: number): DebuggerStatement {
  return {
    kind: NodeKind.DebuggerStatement,
    flags,
    intersects: false,
    transformFlags: TransformFlags.None,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
