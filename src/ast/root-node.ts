import { SyntaxKind, SyntaxNode, NodeFlags , TransformFlags} from './syntax-node';
import { StatementNode } from './statements';
import { StringLiteral } from './expressions/string-literal';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends SyntaxNode {
  readonly directives: StringLiteral[];
  readonly statements: StatementNode[];
  readonly isModule: boolean;
  readonly source: string;
  readonly fileName: string;
}

export function createRootNode(
  directives: StringLiteral[],
  statements: StatementNode[],
  isModule: boolean,
  source: string,
  fileName: string
): RootNode {
  return {
    kind: SyntaxKind.RootNode,
    directives,
    statements,
    isModule,
    source,
    fileName,
    flags: NodeFlags.None,
    transformFlags: TransformFlags.None,
    start: 0,
    end: source.length,
  };
}
