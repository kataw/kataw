import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Debugger statement
 */
export interface DebuggerStatement extends SyntaxNode {
  readonly debuggerKeyword: SyntaxToken<TokenSyntaxKind>;
}

export function createDebuggerStatement(
  debuggerKeyword: SyntaxToken<TokenSyntaxKind>,
  flags: NodeFlags,
  start: number,
  end: number
): DebuggerStatement {
  return {
    kind: SyntaxKind.DebuggerStatement,
    debuggerKeyword,
    flags,
    start,
    end
  };
}
