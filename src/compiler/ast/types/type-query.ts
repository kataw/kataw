import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { QualifiedName } from './qualified-name';

/**
 * TypeQuery
 */

export interface TypeQuery extends Node {
  readonly exprName: IdentifierReference | QualifiedName;
}

export function createTypeQuery(
  exprName: IdentifierReference | QualifiedName,
  flags: NodeFlags,
  start: number,
  end: number
): TypeQuery {
  return {
    kind: NodeKind.TypeQuery,
    exprName,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateTypeQuery(node: TypeQuery, exprName: IdentifierReference | QualifiedName): TypeQuery {
  return node.exprName !== exprName
    ? updateNode(createTypeQuery(exprName, node.flags, node.start, node.end), node)
    : node;
}
