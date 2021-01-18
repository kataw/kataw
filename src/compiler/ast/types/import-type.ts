import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { TypeNode } from './';
import { TypeArguments } from './type-arguments';
import { QualifiedName } from './qualified-name';
import { IdentifierReference } from '../expressions/identifier-reference';
/**
 * ImportType
 */

export interface ImportType extends Node {
  readonly isTypeOf: boolean;
  readonly argument: TypeNode;
  readonly qualifier: IdentifierReference | QualifiedName | null;
  readonly typeArguments: TypeArguments | null;
}

export function createImportType(
  isTypeOf: boolean,
  argument: TypeNode,
  qualifier: IdentifierReference | QualifiedName | null,
  typeArguments: TypeArguments | null,
  start: number,
  end: number
): ImportType {
  return {
    kind: NodeKind.ImportType,
    isTypeOf,
    argument,
    qualifier,
    typeArguments,
    flags: NodeFlags.None,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    parent: null,
    emitNode: null,
    start,
    end
  };
}
