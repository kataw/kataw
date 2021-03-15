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
  readonly isOptional: boolean;
  readonly type: TypeNode;
}

export function createNamedTupleMember(
  ellipsis: boolean,
  name: IdentifierReference,
  isOptional: boolean,
  type: TypeNode,
  flags: NodeFlags,
  start: number,
  end: number
): NamedTupleMember {
  return {
    kind: NodeKind.NamedTupleMember,
    ellipsis,
    name,
    isOptional,
    type,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateNamedTupleMember(
  node: NamedTupleMember,
  ellipsis: boolean,
  name: IdentifierReference,
  isOptional: boolean,
  type: TypeNode
): NamedTupleMember {
  return node.ellipsis !== ellipsis || node.type !== type || node.isOptional !== isOptional
    ? updateNode(
        createNamedTupleMember(node.ellipsis, name, node.isOptional, type, node.flags, node.start, node.end),
        node
      )
    : node;
}
