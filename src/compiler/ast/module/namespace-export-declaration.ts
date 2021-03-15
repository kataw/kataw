import { IdentifierReference } from './../expressions/identifier-reference';
import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';

export interface NamespaceExportDeclaration extends Node {
  readonly name: IdentifierReference;
}

export function createNamespaceExportDeclaration(
  name: IdentifierReference,
  flags: NodeFlags,
  start: number,
  end: number
): NamespaceExportDeclaration {
  return {
    kind: NodeKind.NamespaceExportDeclaration,
    name,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateNamespaceExportDeclaration(
  node: NamespaceExportDeclaration,
  name: IdentifierReference
): NamespaceExportDeclaration {
  return node.name !== name
    ? updateNode(createNamespaceExportDeclaration(name, node.flags, node.start, node.end), node)
    : node;
}
