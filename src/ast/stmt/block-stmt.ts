import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { StatementNode } from '.';

export interface BlockStatement extends SyntaxNode {
  readonly kind: SyntaxKind.BlockStatement;
  readonly statements: StatementNode[];
}

export function createBlockStatement(
  statements: StatementNode[],
  flags: NodeFlags,
  start: number,
  end: number
): BlockStatement {
  return {
    kind: SyntaxKind.BlockStatement,
    statements,
    flags,
    start,
    end
  };
}
