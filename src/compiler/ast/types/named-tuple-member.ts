import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { TypeNode } from '.';
import { IdentifierReference } from '../expressions/identifier-reference';

/**
 * NamedTupleMember
 */

export interface NamedTupleMember extends Node {
  readonly ellipsis: boolean;
  readonly name: IdentifierReference;
  readonly optional: boolean;
  readonly type: TypeNode;
}

export function createNamedTupleMember(
  ellipsis: boolean,
  name: IdentifierReference,
  optional: boolean,
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): NamedTupleMember {
  return {
    kind: NodeKind.NamedTupleMember,
    ellipsis,
    name,
    optional,
    type,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}

export function updateNamedTupleMember(
  node: NamedTupleMember,
  name: IdentifierReference,
  type: TypeNode
): NamedTupleMember {
  return node.name !== name || node.type !== type
    ? updateNode(
        createNamedTupleMember(node.ellipsis, name, node.optional, type, node.flags, node.start, node.end),
        node
      )
    : node;
}
