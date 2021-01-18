import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { IdentifierReference } from '../expressions/identifier-reference';
import { IdentifierName } from '../expressions/identifier-name';

/**
 * QualifiedName
 */

export interface QualifiedName extends Node {
  readonly left: IdentifierReference | IdentifierName | QualifiedName;
  readonly right: IdentifierName;
}

export function createQualifiedName(
  left: IdentifierReference | IdentifierName | QualifiedName,
  right: IdentifierName,
  start: number,
  end: number
): QualifiedName {
  return {
    kind: NodeKind.QualifiedName,
    left,
    right,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
