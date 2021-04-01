import { SyntaxNode, SyntaxKind, NodeFlags, AutoFix } from '../syntax-node';
import { StatementNode } from '../stmt';

export interface FunctionStatementList extends SyntaxNode {
  readonly statements: StatementNode[];
  readonly multiline: boolean;
}

export function createFunctionStatementList(
  statements: StatementNode[],
  multiline: boolean,
  start: number,
  end: number
): FunctionStatementList {
  return {
    kind: SyntaxKind.FunctionStatementList,
    statements,
    multiline,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
