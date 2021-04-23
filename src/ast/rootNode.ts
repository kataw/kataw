import { SyntaxKind, SyntaxNode, NodeFlags } from './syntax-node';
import { StatementNode } from './stmt';
import { StringLiteral } from './expressions/string-literal';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends SyntaxNode {
  readonly directives: StringLiteral[];
  readonly statements: StatementNode[];
  readonly isModule: boolean;
  readonly text: string;
  readonly fileName: string;
}

export function createRootNode(
  directives: StringLiteral[],
  statements: StatementNode[],
  isModule: boolean,
  text: string,
  fileName: string
): RootNode {
  return {
    kind: SyntaxKind.RootNode,
    directives,
    statements,
    isModule,
    text,
    fileName,
    flags: NodeFlags.None,
    start: 0,
    end: text.length
  };
}
