import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Break statement.
 */
export interface ContinueStatement extends SyntaxNode {
  readonly label: Identifier | null;
}

export function createContinueStatement(label: Identifier | null, start: number, end: number): ContinueStatement {
  return {
    kind: SyntaxKind.ContinueStatement,
    label,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
