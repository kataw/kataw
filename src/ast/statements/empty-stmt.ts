import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';

/**
 * Empty statement.
 */
export type EmptyStatement = SyntaxNode;

export function createEmptyStatement(start: number, end: number): EmptyStatement {
  return {
    kind: SyntaxKind.EmptyStatement,
    flags: NodeFlags.IsStatement,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
