import { StringLiteral } from './string-literal';
import { SyntaxNode, SyntaxKind, NodeFlags } from '../syntax-node';
import { StatementNode } from '../statements';

export interface FunctionStatementList extends SyntaxNode {
  readonly directives: StringLiteral[];
  readonly statements: StatementNode[];
}

export function createFunctionStatementList(
  directives: StringLiteral[],
  statements: StatementNode[],
  flags: NodeFlags,
  start: number,
  end: number
): FunctionStatementList {
  return {
    kind: SyntaxKind.FunctionStatementList,
    directives,
    statements,
    flags,
    start,
    end
  };
}
