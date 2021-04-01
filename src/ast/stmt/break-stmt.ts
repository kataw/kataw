import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Break statement.
 */
export interface BreakStatement extends SyntaxNode {
  readonly label: Identifier | null;
}

export function createBreakStatement(label: Identifier | null, start: number, end: number): BreakStatement {
  return {
    kind: SyntaxKind.BreakStatement,
    label,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
