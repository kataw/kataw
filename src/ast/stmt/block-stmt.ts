import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { StatementNode } from '.';

export interface BlockStatement extends SyntaxNode {
  readonly kind: SyntaxKind.BlockStatement;
  readonly statements: StatementNode[];
  readonly multiLine: boolean;
}

export function createBlockStatement(
  statements: StatementNode[],
  multiLine: boolean,
  start: number,
  end: number
): BlockStatement {
  return {
    kind: SyntaxKind.BlockStatement,
    statements,
    multiLine,
    flags: NodeFlags.IsStatement,
    start,
    end
  };
}
