import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Diagnostic } from '../diagnostics/diagnostic';
import { updateNode } from '../utils';
import { Statement } from './statements';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends Node {
  readonly source: string;
  readonly filename: string;
  readonly statements: readonly Statement[];
  readonly isModule: boolean;
  readonly printable: boolean;
  readonly diagnostics: Diagnostic[];
}

export function createRootNode(
  source: string,
  filename: string,
  statements: readonly Statement[],
  isModule: boolean,
  diagnostics: Diagnostic[]
): RootNode {
  return {
    kind: NodeKind.RootNode,
    source,
    filename,
    statements,
    isModule,
    printable: true,
    diagnostics,
    original: null,
    symbol: null,
    flags: NodeFlags.None,
    transformFlags: TransformFlags.None,
    start: 0,
    end: source.length
  };
}

export function updateRootNode(node: RootNode, statements: readonly Statement[]): RootNode {
  return node.statements !== statements
    ? updateNode(createRootNode(node.source, node.filename, statements, node.isModule, node.diagnostics), node)
    : node;
}
