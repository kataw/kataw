import { Node, NodeFlags, NodeKind, TransformFlags } from '../node';
import { updateNode } from '../../utils';
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
  flags: NodeFlags,
  start: number,
  end: number
): ImportType {
  return {
    kind: NodeKind.ImportType,
    isTypeOf,
    argument,
    qualifier,
    typeArguments,
    flags,
    intersects: false,
    transformFlags: TransformFlags.TypeScript,
    start,
    end
  };
}

export function updateImportType(
  node: ImportType,
  isTypeOf: boolean,
  argument: TypeNode,
  qualifier: IdentifierReference | QualifiedName | null,
  typeArguments: TypeArguments | null
): ImportType {
  return node.isTypeOf !== isTypeOf ||
    node.argument !== argument ||
    node.qualifier !== qualifier ||
    node.typeArguments !== typeArguments
    ? updateNode(createImportType(isTypeOf, argument, qualifier, typeArguments, node.flags, node.start, node.end), node)
    : node;
}
