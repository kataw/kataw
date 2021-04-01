import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * Debugger statement
 */
export type DebuggerStatement = SyntaxNode;

export function createDebuggerStatement(start: number, end: number): DebuggerStatement {
  return {
    kind: SyntaxKind.DebuggerStatement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
