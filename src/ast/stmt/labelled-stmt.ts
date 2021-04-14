import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { Identifier } from '../expressions/identifier-expr';

/**
 * Labelled statement
 */
export interface LabelledStatement extends SyntaxNode {
  readonly label: Identifier;
  readonly statement: StatementNode;
}

export function createLabelledStatement(
  label: Identifier,
  statement: StatementNode,
  start: number,
  end: number
): LabelledStatement {
  return {
    kind: SyntaxKind.LabelledStatement,
    label,
    statement,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
