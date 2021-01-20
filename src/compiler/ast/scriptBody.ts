import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Statement } from './statements';
import { updateNode } from '../../visitor/common';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface ScriptBody extends Node {
  readonly statements: Statement[];
}

export function createScriptBody(
  statements: Statement[],
  flags: NodeFlags,
  start: number,
  end: number
): ScriptBody {
  return {
    kind: NodeKind.ScriptBody,
    statements,
    transformFlags: TransformFlags.None,
    flags,
    intersects: false,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateScriptBody(node: ScriptBody, statements: Statement[]): ScriptBody {
  return node.statements !== statements
    ? updateNode(
      createScriptBody(statements, node.flags, node.start, node.end),
        node
      )
    : node;
}
