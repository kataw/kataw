import { ScriptBody } from './scriptBody';
import { NodeKind, Node, NodeFlags, TransformFlags } from './node';
import { Diagnostic } from '../diagnostics/diagnostic';
import { updateNode } from '../utils';

/**
 * A top level node which contains the list of statements in a program,
 * and some information about the file which the statements came from.
 */
export interface Script extends Node {
  readonly source: string;
  readonly filename: string;
  readonly scriptBody: ScriptBody;
  readonly jsx: boolean;
  readonly printable: boolean;
  readonly diagnostics: Diagnostic[];
  incremental: boolean;
}

export function createScript(
  source: string,
  filename: string,
  scriptBody: ScriptBody,
  jsx: boolean,
  diagnostics: Diagnostic[]
): Script {
  return {
    kind: NodeKind.Script,
    source,
    filename,
    scriptBody,
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

export function updateScript(node: Script, scriptBody: ScriptBody): Script {
  return node.scriptBody !== scriptBody
    ? updateNode(createScript(node.source, node.filename, scriptBody, node.jsx, node.diagnostics), node)
    : node;
}
