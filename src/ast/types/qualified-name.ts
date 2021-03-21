import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { IdentifierName } from '../expressions/identifier-name';

/**
 * QualifiedName
 */

export type EntityName = IdentifierReference | IdentifierName | QualifiedName;

export interface QualifiedName extends Node {
  readonly left: EntityName;
  readonly right: IdentifierName;
}

export function createQualifiedName(
  left: EntityName,
  right: IdentifierName,
  flags: NodeFlags,
  start: number,
  end: number
): QualifiedName {
  return {
    kind: NodeKind.QualifiedName,
    left,
    right,
    flags,
    symbol: null,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateQualifiedName(node: QualifiedName, left: EntityName, right: IdentifierName): QualifiedName {
  return node.left !== left || node.right !== right
    ? updateNode(createQualifiedName(left, right, node.flags, node.start, node.end), node)
    : node;
}
