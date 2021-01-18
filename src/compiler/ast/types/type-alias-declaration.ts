import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { IdentifierReference } from '../expressions/identifier-reference';
import { TypeNode } from './';
import { TypeParameters } from './type-parameter-list';

/**
 * Type alias declaration
 */

export interface TypeAliasDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly type: TypeNode;
  readonly typeParameters: TypeParameters;
  readonly isDeclared: boolean;
  readonly isExported: boolean;
}

export function createTypeAliasDeclaration(
  name: IdentifierReference,
  type: TypeNode,
  typeParameters: TypeParameters,
  isDeclared: boolean,
  isExported: boolean,
  start: number,
  end: number
): TypeAliasDeclaration {
  return {
    kind: NodeKind.TypeAliasDeclaration,
    name,
    type,
    typeParameters,
    isDeclared,
    isExported,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
