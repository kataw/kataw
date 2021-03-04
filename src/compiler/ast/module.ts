import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Diagnostic } from '../diagnostics/diagnostic';
import { updateNode } from '../utils';
import { ModuleBody } from './moduleBody';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface Module extends Node {
  readonly source: string;
  readonly filename: string;
  readonly moduleBody: ModuleBody;
  readonly jsx: boolean;
  readonly printable: boolean;
  readonly diagnostics: Diagnostic[];
  incremental: boolean;
}

export function createModule(
  source: string,
  filename: string,
  moduleBody: ModuleBody,
  jsx: boolean,
  diagnostics: Diagnostic[]
): Module {
  return {
    kind: NodeKind.Module,
    source,
    filename,
    moduleBody,
    jsx,
    printable: true,
    diagnostics,
    incremental: false,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.None,
    start: 0,
    end: source.length
  };
}

export function updateModule(node: Module, moduleBody: ModuleBody): Module {
  return node.moduleBody !== moduleBody
    ? updateNode(createModule(node.source, node.filename, moduleBody, node.jsx, node.diagnostics), node)
    : node;
}
