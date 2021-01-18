import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { IdentifierReference } from '../expressions/identifier-reference';
import { QualifiedName } from './qualified-name';

/**
 * TypeQuery
 */

export interface TypeQuery extends Node {
  readonly exprName: IdentifierReference | QualifiedName;
}

export function createTypeQuery(exprName: IdentifierReference | QualifiedName, start: number, end: number): TypeQuery {
  return {
    kind: NodeKind.TypeQuery,
    exprName,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
