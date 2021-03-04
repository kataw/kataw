import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Statement } from './statements';
import { updateNode } from '../utils';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface ModuleBody extends Node {
  readonly statements: Statement[];
}

export function createModuleBody(statements: Statement[], flags: NodeFlags, start: number, end: number): ModuleBody {
  return {
    kind: NodeKind.ModuleBody,
    statements,
    transformFlags: TransformFlags.None,
    flags,
    intersects: false,
    start,
    end
  };
}

export function updateModuleBody(node: any, statements: Statement[]): ModuleBody {
  return node.statements !== statements
    ? updateNode(createModuleBody(statements, node.flags, node.start, node.end), node)
    : node;
}
