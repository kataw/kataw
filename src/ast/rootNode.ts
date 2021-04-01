import { SyntaxKind, SyntaxNode, NodeFlags, AutoFix } from './syntax-node';
import { DiagnosticType } from '../diagnostic/';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends SyntaxNode {
  kind: SyntaxKind.RootNode;
  statements: any[];
  isModule: boolean;
  text: string;
  fileName: string;
  diagnostics: DiagnosticType[];
}

export function createRootNode(
  statements: any[],
  isModule: boolean,
  text: string,
  fileName: string,
  diagnostics: DiagnosticType[]
): RootNode {
  return {
    kind: SyntaxKind.RootNode,
    statements,
    isModule,
    text,
    fileName,
    autofix: AutoFix.NotFixable,
    flags: NodeFlags.None,
    diagnostics,
    start: 0,
    end: text.length
  };
}
