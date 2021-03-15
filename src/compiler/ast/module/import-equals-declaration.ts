import { Node, NodeKind, TransformFlags, NodeFlags } from '../node';
import { updateNode } from '../../utils';
import { IdentifierReference } from '../expressions/identifier-reference';
import { IdentifierName } from '../expressions/identifier-name';
import { ExternalModuleReference } from './external-module-reference';
import { QualifiedName } from '../types/qualified-name';

export interface ImportEqualsDeclaration extends Node {
  readonly name: IdentifierReference;
  readonly moduleReference: ExternalModuleReference | IdentifierReference | IdentifierName | QualifiedName;
  readonly isTypeOnly: boolean;
}

export function createImportEqualsDeclaration(
  name: IdentifierReference,
  moduleReference: ExternalModuleReference | IdentifierReference | IdentifierName | QualifiedName,
  isTypeOnly: boolean,
  flags: NodeFlags,
  start: number,
  end: number
): ImportEqualsDeclaration {
  return {
    kind: NodeKind.ImportEqualsDeclaration,
    name,
    moduleReference,
    isTypeOnly,
    flags,
    symbol: null,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}

export function updateImportEqualsDeclaration(
  node: ImportEqualsDeclaration,
  name: IdentifierReference,
  moduleReference: ExternalModuleReference | IdentifierReference | IdentifierName | QualifiedName
): ImportEqualsDeclaration {
  return node.name !== name || node.moduleReference !== moduleReference
    ? updateNode(
        createImportEqualsDeclaration(name, moduleReference, node.isTypeOnly, node.flags, node.start, node.end),
        node
      )
    : node;
}
