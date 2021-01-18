import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Diagnostic } from '../diagnostics/diagnostic';
import { Statement } from './statements';
import { updateNode } from '../../visitor/common';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface RootNode extends Node {
  readonly kind: NodeKind;
  readonly source: string;
  readonly filename: string;
  readonly statements: Statement[];
  readonly jsx: boolean;
  readonly module: boolean;
  readonly diagnostics: Diagnostic[];
  incremental: boolean;
}

export function createRootNode(
  source: string,
  filename: string,
  statements: Statement[],
  jsx: boolean,
  module: boolean,
  diagnostics: Diagnostic[]
): RootNode {
  return {
    kind: NodeKind.RootNode,
    source,
    filename,
    statements,
    jsx,
    module,
    diagnostics,
    parent: null,
    emitNode: null,
    incremental: false,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.None,
    start: 0,
    end: source.length
  };
}

export function updateRootNode(node: RootNode, statements: Statement[]): RootNode {
  return node.statements !== statements
    ? updateNode(
        {
          kind: NodeKind.RootNode,
          source: node.source,
          filename: node.filename,
          statements,
          jsx: node.jsx,
          module: node.module,
          diagnostics: node.diagnostics,
          parent: null,
          emitNode: null,
          incremental: false,
          flags: node.flags,
          intersects: false,
          transformFlags: node.transformFlags,
          original: node,
          start: 0,
          end: node.end
        },
        node
      )
    : node;
}
