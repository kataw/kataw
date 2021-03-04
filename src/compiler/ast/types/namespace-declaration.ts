import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { NamespaceBlock } from './namespace-block';

/**
 * Namespace declaration
 */

export interface NamespaceDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly body: NamespaceBlock;
}

export function createNamespaceDeclaration(
  name: IdentifierReference,
  body: NamespaceBlock,
  flags: NodeFlags,
  start: number,
  end: number
): NamespaceDeclaration {
  return {
    kind: NodeKind.NamespaceDeclaration,
    name,
    body,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateNamespaceDeclaration(
  node: NamespaceDeclaration,
  name: IdentifierReference,
  body: NamespaceBlock
): NamespaceDeclaration {
  return node.name !== name || node.body !== body
    ? updateNode(createNamespaceDeclaration(name, body, node.flags, node.start, node.end), node)
    : node;
}
