import { StringLiteral } from './string-literal';
import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { StatementNode } from '../stmt';

export interface FunctionStatementList extends SyntaxNode {
  readonly directives: StringLiteral[];
  readonly statements: StatementNode[];
  readonly multiline: boolean;
}

export function createFunctionStatementList(
  directives: StringLiteral[],
  statements: StatementNode[],
  multiline: boolean,
  start: number,
  end: number
): FunctionStatementList {
  return {
    kind: SyntaxKind.FunctionStatementList,
    directives,
    statements,
    multiline,
    flags: NodeFlags.ExpressionNode,
    start,
    end
  };
}
