import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';

/**
 * Empty statement.
 */
export type EmptyStatement = SyntaxNode;

export function createEmptyStatement(start: number, end: number): EmptyStatement {
  return {
    kind: SyntaxKind.EmptyStatement,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
