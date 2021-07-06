import { SyntaxNode, SyntaxKind, NodeFlags , TransformFlags} from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';

/**
 * Debugger statement
 */
export interface DebuggerStatement extends SyntaxNode {
  readonly debuggerKeyword: SyntaxToken<TokenSyntaxKind>;
}

export function createDebuggerStatement(
  debuggerKeyword: SyntaxToken<TokenSyntaxKind>,
  start: number,
  end: number
): DebuggerStatement {
  return {
    kind: SyntaxKind.DebuggerStatement,
    debuggerKeyword,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
